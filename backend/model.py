from pydantic import BaseModel, Field
from typing import Literal, Dict, Any
from datetime import datetime

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

class BaseFormModel(BaseModel):
    form_id : str = None
    form_type: str
    semester_year: str
    semester: str
    professor: str
    senderId: str
    status: str
    date: str = Field(default_factory=lambda: datetime.utcnow().strftime('%Y-%m-%d'))
    additional_fields: Dict[str, Any] = {}

class normalForm(BaseFormModel):
    title: str
    content: str
    subject: str
    section: str

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