# Naresh Kumar D - Personal Portfolio

A modern, production-ready personal portfolio website built with React + Vite + TypeScript for the frontend, and FastAPI for the backend.

## Tech Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: FastAPI (Python 3.11+), Pydantic
- **Styling**: Tailwind CSS (custom dark theme design system)

## Project Structure
- `app/`: React + Vite frontend
- `api/`: FastAPI backend
- `docs/`: Developer documentation

## Setup Instructions

### Environment Variables
1. Copy `.env.example` to `.env` in the root (if required).
2. Inside `api/`, create a `.env` file for backend secrets.
3. Inside `app/`, create a `.env` file for frontend configuration if needed.

### Running Locally (Docker)
```bash
docker-compose up --build
```
This will start:
- FastAPI Backend on `http://localhost:8000`
- React Frontend on `http://localhost:80` (via Nginx proxy inside docker) or 3000 if not compiled.

### Running Locally (Manual)

**Backend:**
```bash
cd api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd app
npm install
npm run dev
```

## Developer Notes
Please refer to the `docs/` directory for code specifications, API documentation, and architecture notes.
