from fastapi import FastAPI, HTTPException, File, UploadFile, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
# from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from bson.objectid import ObjectId
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi.security import OAuth2PasswordRequestForm

#App object
app = FastAPI()

from model import DefaultForm, Users

origins = ["http://localhost:3000"] # Replace with your frontend URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origins],  # Allows specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

client = AsyncIOMotorClient("mongodb+srv://keerati:1234@cluster0.me7rp.mongodb.net/")
db = client.TUREQ # Database สำหรับ TUREQ
form_collection = db.defaultform # Collection สำหรับ defaultform
users_collection = db.users # Collection สำหรับ users
fs_bucket = AsyncIOMotorGridFSBucket(db)

# Secret key and Login Manager
SECRET = "super-secret-key"
manager = LoginManager(SECRET, token_url="/auth/token")

# test route
@app.get("/")
async def root():
    return {"message":"hello"}

# Login Endpoint
@manager.user_loader
async def load_user(username: str):
    user = await users_collection.find_one({"username": username})  # Use the reference here
    return user

@app.post("/auth/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await users_collection.find_one({"username": form_data.username})
    if not user or user["password"] != form_data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Include role in the response token
    access_token = manager.create_access_token(data={"sub": form_data.username, "role": user["role"]})
    return {"access_token": access_token, 
            "role": user["role"], 
            "token_type": "bearer", 
            "name_th": user["name_th"]}

#Create form
@app.post("/forms")
async def post_form(form : DefaultForm):
    result = await form_collection.insert_one(form.dict())
    if result:
        return {
            "id": str(result.inserted_id),
            "form_type" : form.form_type,
            "semester_year" : form.semester_year,
            "semester" : form.semester,
            "title" : form.title,
            "content" : form.content,
            "professor" : form.professor,
            "subject" : form.subject,
            "section" : form.section,
            "senderId" : form.senderId,
            "status" : form.status,    
    }
    raise HTTPException(400,"Something went wrong")

#Read-one form
@app.get("/forms/{form_id}")
async def read_form(form_id):
    form = await form_collection.find_one({"_id": ObjectId(form_id)})
    if form:
        return {
            "id": str(form["_id"]),
            "form_type" : form["form_type"],
            "semester_year" : form["semester_year"],
            "semester" : form["semester"],
            "title" : form["title"],
            "content" : form["content"],
            "professor" : form["professor"],
            "subject" : form["subject"],
            "section" : form["section"],
            "senderId" : form["senderId"],
            "status" : form["status"],   
        }
    raise HTTPException(404, "form not found")

@app.get("/forms/professor/{professor_name}")
async def get_forms_by_professor(professor_name: str):
    forms = []
    cursor = form_collection.find({"professor": professor_name})
    async for document in cursor:
        forms.append(DefaultForm(**document))
    if forms:
        return forms
    raise HTTPException(status_code=404, detail=f"No forms found for professor: {professor_name}")


#Read-all form
@app.get("/forms")
async def read_all_form():
    forms = []
    cursor = form_collection.find()
    async for document in cursor:
        forms.append(DefaultForm(**document))
    return forms

#Update form
@app.put("/forms/{form_id}")
async def put_form(form_id: str, form : DefaultForm):
    result = await form_collection.update_one(
    {"_id": ObjectId(form_id)}, {"$set": form.dict(exclude_unset=True) }
    )
    if result.modified_count == 1:
        return {
            "id" : form_id, 
            "form_type" : form.form_type,
            "semester_year": form.semester_year,
            "semester": form.semester,
            "title": form.title,
            "content": form.content,
            "professor": form.professor,
            "subject": form.subject,
            "section": form.section,
            "senderId": form.senderId,
            "status": form.status
            }
    raise HTTPException(404, "error")

#Delete form
@app.delete("/forms/{form_id}")
async def delete_form(form_id):
    response = await form_collection.delete_one({"_id": ObjectId(form_id)})
    if response:
        return "Successfully deleted form"
    raise HTTPException(404, "error")

#===============================================================================================#

#ฝั่งการอัปโหลดไฟล์ PDF

#Create/Upload PDF
@app.post("/pdf")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="File type must be PDF")

    # อ่านข้อมูลไฟล์ PDF
    file_content = await file.read()

    # บันทึกไฟล์ลง GridFS แบบ asynchronous
    pdf_id = await fs_bucket.upload_from_stream(file.filename, file_content)

    return JSONResponse(content={"file_id": str(pdf_id)})

#Read PDF
@app.get("/pdf/")
async def list_pdfs():
    files = []
    async for file in fs_bucket.find():
        files.append({
            "filename": file.filename,
            "file_id": str(file._id),
            "content_type": file.content_type
        })
    return JSONResponse(content=files)