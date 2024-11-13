from pydantic import BaseModel, Field
from typing import Literal, Optional, Dict, Any, List
from datetime import datetime
from enum import Enum

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

class ApprovalStatus(str, Enum):
    pending = "pending"
    approved = "approved"
    disapproved = "disapproved"

class ProfessorApproval(BaseModel):
    professor: str
    status: ApprovalStatus = ApprovalStatus.pending
    approval_order: int
    comment: Optional[str] = None

class BaseFormModel(BaseModel):
    form_id : str = None
    form_type: str
    semester_year: str
    semester: str
    professor: str
    senderId: str
    status: ApprovalStatus = ApprovalStatus.pending
    approval_chain: List[ProfessorApproval] = []  # List of professors who need to approve
    date: str = Field(default_factory=lambda: datetime.utcnow().strftime('%Y-%m-%d'))
    additional_fields: Dict[str, Any] = {}

class normalForm(BaseFormModel):
    title: str
    content: str
    subject: str
    section: str

class PDFModel(BaseModel):
    filename : str
    content_type : str
    size : int