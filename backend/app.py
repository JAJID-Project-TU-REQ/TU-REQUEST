from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
# from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from bson.objectid import ObjectId

#App object
app = FastAPI()

from model import DefaultForm
# from database import (
#     # create_form,
#     # fetch_one_form,
#     # fetch_all_form,
#     # remove_form,
#     # update_form
# )

origins = ["http://localhost:3000"] # Replace with your frontend URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

client = AsyncIOMotorClient("mongodb+srv://keerati:1234@cluster0.me7rp.mongodb.net/")
db = client.TUREQ
collection = db.defaultform
fs_bucket = AsyncIOMotorGridFSBucket(db)

# test route
@app.get("/")
async def root():
    return {"message":"hello"}

#Create form
@app.post("/forms")
async def post_form(form : DefaultForm):
    result = await collection.insert_one(form.dict())
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
    form = await collection.find_one({"_id": ObjectId(form_id)})
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
    cursor = collection.find({"professor": professor_name})
    async for document in cursor:
        forms.append(DefaultForm(**document))
    if forms:
        return forms
    raise HTTPException(status_code=404, detail=f"No forms found for professor: {professor_name}")


#Read-all form
@app.get("/forms")
async def read_all_form():
    forms = []
    cursor = collection.find()
    async for document in cursor:
        forms.append(DefaultForm(**document))
    return forms

#Update form
@app.put("/forms/{form_id}")
async def put_form(form_id: str, form : DefaultForm):
    result = await collection.update_one(
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
    response = await collection.delete_one({"_id": ObjectId(form_id)})
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