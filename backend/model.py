from pydantic import BaseModel
from typing import Literal

class Users(BaseModel):
    username : str
    password : str
    role: Literal['student', 'professor', 'admin']
    name_en : str
    name_th : str
    email : str
    faculty : str
    major : str
    room : str

class DefaultForm(BaseModel):
    form_type : str
    semester_year : str
    semester : str
    title : str
    content : str
    professor : str
    subject : str
    section : str
    senderId : str
    status : str

class PDFModel(BaseModel):
    filename : str
    content_type : str
    size : int