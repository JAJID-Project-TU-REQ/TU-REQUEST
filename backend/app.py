from fastapi import FastAPI, HTTPException, File, UploadFile, Depends,
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from bson.objectid import ObjectId
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi.security import OAuth2PasswordRequestForm
from typing import List, Optional
from datetime import datetime

#App object
app = FastAPI()

from model import Users, BaseFormModel, ProfessorApproval, ApprovalStatus

origins = ["http://localhost:3000"] # Replace with your frontend URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

client = AsyncIOMotorClient("mongodb+srv://keerati:1234@cluster0.me7rp.mongodb.net/")
db = client.TUREQ # Database สำหรับ TUREQ
users_collection = db.users # Collection สำหรับ users
forms_collection = db.forms # Collection สำหรับ forms
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
            "name_th": user["name_th"],
            "name_en": user["name_en"],
            "username": user["username"]
            }

# Register Endpoint
@app.post("/register")
async def register(user: Users):
    existing_user = await users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    new_user = {
        "username": user.username,
        "password": user.password,
        "role": user.role,
        "name_en": user.name_en,
        "name_th": user.name_th,
        "email": user.email,
        "faculty": user.faculty,
        "major": user.major,
        "room": user.room
    }
    await users_collection.insert_one(new_user)
    return {"message": "User registered successfully"}
 
#  #Create method for all-form
# @app.post("/forms")
# async def submit_form(form_data: BaseFormModel):
#     # Convert form_data to dictionary (without the 'unset' fields)
#     form_data_dict = form_data.dict(exclude_unset=True)

#     # Ensure the 'date' field is present in the dict
#     if 'date' not in form_data_dict:
#         form_data_dict['date'] = datetime.utcnow().strftime('%Y-%m-%d')  # Set current date if missing
    
#     # Insert the form data into MongoDB
#     result = await db["forms"].insert_one(form_data_dict)

#     # Add form_id to the dictionary, mapping it from the MongoDB _id
#     form_data_dict["form_id"] = str(result.inserted_id)

#     # Optionally, update the database document with the form_id if needed
#     await db["forms"].update_one({"_id": result.inserted_id}, {"$set": {"form_id": str(result.inserted_id)}})

#     # Return response with the inserted ID and form_id
#     return {"inserted_id": str(result.inserted_id), "form_id": form_data_dict["form_id"], "date": form_data_dict["date"]}

@app.post("/forms")
async def submit_form(form_data: BaseFormModel):
    # Insert the form data into MongoDB
    form_data_dict = form_data.dict(exclude_unset=True)

    # Initialize the approval chain with professors in the correct order
    approval_chain = [
        {"professor": "admin", "status": ApprovalStatus.pending, "approval_order": 1},
        {"professor": form_data.professor, "status": ApprovalStatus.pending, "approval_order": 2},
        {"professor": "xmen888", "status": ApprovalStatus.pending, "approval_order": 3}
    ]
    
    form_data_dict["approval_chain"] = approval_chain

    # Store form in MongoDB (you should replace db["forms"].insert_one with your actual MongoDB insert method)
    result = await db["forms"].insert_one(form_data_dict)

    form_data_dict["form_id"] = str(result.inserted_id)

    return {"inserted_id": str(result.inserted_id)}

#Read-one form by form_id field
@app.get("/forms/{form_id}")
async def get_form(form_id: str):
    
    # Query the database for the form with the provided form_id
    form = await db["forms"].find_one({"form_id": form_id})

    if form:
        # Convert the MongoDB _id to a string and include in the response
        form["_id"] = str(form["_id"])
        return form
    else:
        # Raise an error if no form is found with the given form_id
        raise HTTPException(status_code=404, detail="Form not found")

#Read-all form
@app.get("/forms")
async def read_all_form():
    forms = []
    cursor = forms_collection.find()
    async for document in cursor:
        document["ObjectId"] = str(document["_id"])
        forms.append(BaseFormModel(**document))
    return forms

# Endpoint for professor approval or disapproval
@app.patch("/forms/{form_id}/approve")
async def approve_form(form_id: str, professor: str, status: str, comment: Optional[str] = None):
    # Find the form by form_id
    form = await forms_collection.find_one(form_id)
    if not form:
        raise HTTPException(status_code=404, detail="Form not found")
    
    # Find the professor in the approval chain
    approval = next((a for a in form.approval_chain if a.professor == professor), None)
    if not approval:
        raise HTTPException(status_code=400, detail="Professor not found in approval chain")
    
    # Update the professor's approval status
    approval.status = status
    approval.comment = comment
    if status == "disapproved":
        form.status = "disapproved"
    else:
        # Move to the next approval
        form.status = "approved" if all(a.status == "approved" for a in form.approval_chain) else "pending"
    
    await form.save()
    return {"message": "Form status updated successfully", "form": form}

#Read-all form query by professor
@app.get("/professor_forms/{professor}", response_model=List[BaseFormModel])
async def get_forms_by_professor(professor: str):
    try:
        forms = await forms_collection.find({"professor": professor}).to_list(length=100)
        if not forms:
            raise HTTPException(status_code=404, detail="No forms found for this professor")
        return forms
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

#ไอดิวลองเขียนดู
@app.get("/student_forms/{senderId}", response_model=List[BaseFormModel])
async def get_forms_by_student(senderId: str):
    try:
        forms = await forms_collection.find({"senderId":senderId}).to_list(length=100)
        if not forms:
            raise HTTPException(status_code=404, detail="No forms found for this student")
        return forms
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")    

#Update form (old version)
# @app.put("/forms/{form_id}")
# async def put_form(form_id: str, form : DefaultForm):
#     result = await forms_collection.update_one(
#     {"_id": ObjectId(form_id)}, {"$set": form.dict(exclude_unset=True) }
#     )
#     if result.modified_count == 1:
#         return {
#             "id" : form_id, 
#             "form_type" : form.form_type,
#             "semester_year": form.semester_year,
#             "semester": form.semester,
#             "title": form.title,
#             "content": form.content,
#             "professor": form.professor,
#             "subject": form.subject,
#             "section": form.section,
#             "senderId": form.senderId,
#             "status": form.status
#             }
#     raise HTTPException(404, "error")

#Delete form
@app.delete("/forms/{form_id}")
async def delete_form(form_id):
    response = await forms_collection.delete_one({"_id": ObjectId(form_id)})
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