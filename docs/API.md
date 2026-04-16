# FastAPI Documentation

## Base URL
`/api`

## Endpoints

### 1. Health Check
- **URL**: `/health`
- **Method**: `GET`
- **Description**: Returns the operational status of the server.
- **Success Response**:
  - Code: 200 OK
  - Example: `{"status": "healthy"}`

### 2. Contact form Submission
- **URL**: `/contact`
- **Method**: `POST`
- **Description**: Receives a payload from the frontend contact form and triggers an SMTP email notification.
- **Body Elements**:
  - `name`: string
  - `email`: string
  - `message`: string
- **Success Response**:
  - Code: 200 OK
  - Example: `{"message": "Email sent successfully!"}`
- **Error Response**:
  - Code: 500 Internal Server Error
  - Example: `{"detail": "Failed to send email"}`

### 3. Resume Download
- **URL**: `/resume`
- **Method**: `GET`
- **Description**: Serves the user's latest Resume PDF.
- **Success Response**:
  - Code: 200 OK
  - Content-Type: `application/pdf`
