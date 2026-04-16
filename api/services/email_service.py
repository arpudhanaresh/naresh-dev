import smtplib
from email.message import EmailMessage
from core.config import settings

def send_contact_email(name: str, email: str, message: str) -> bool:
    if not settings.SMTP_USER or not settings.SMTP_PASSWORD:
        print("SMTP Config missing. Simulating successful email send.")
        print(f"To: {settings.CONTACT_EMAIL}\nFrom: {email}\nMessage: {message}")
        return True

    msg = EmailMessage()
    msg.set_content(f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")
    msg["Subject"] = f"New Portfolio Contact from {name}"
    msg["From"] = settings.SMTP_USER
    msg["To"] = settings.CONTACT_EMAIL

    try:
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False
