from pydantic import BaseModel

class DefaultForm(BaseModel):
    form_type : str
    semester_year : str
    semester : str
    title : str
    content : str
    professor : str
    subject : str
    section : str
    senderId : int
    status : str

class PDFModel(BaseModel):
    filename : str
    content_type : str
    size : int

class Users(BaseModel):
    username : str
    password : str
    name_en : str
    name_th : str
    email : str
    faculty : str
    major : str
    room : str