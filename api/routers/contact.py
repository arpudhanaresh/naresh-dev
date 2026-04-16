from fastapi import APIRouter, HTTPException
from models.contact import ContactForm
from services.email_service import send_contact_email

router = APIRouter()

@router.post("/contact")
def submit_contact_form(contact: ContactForm):
    success = send_contact_email(contact.name, contact.email, contact.message)
    if not success:
        raise HTTPException(status_code=500, detail="Failed to send email.")
    return {"message": "Email sent successfully!"}

@router.get("/resume")
def get_resume():
    # In a real scenario, return a FileResponse of the PDF.
    # For now, we return a mock URL.
    return {"message": "Resume endpoint. Add Resume PDF and configure FileResponse."}
