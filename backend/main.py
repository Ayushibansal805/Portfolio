from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://portfolio-brown-pi-58.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(
    api_key="YOUR_GEMINI_KEY"
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

class ChatRequest(BaseModel):
    message: str


PORTFOLIO_CONTEXT = """
You are Ayushi Bansal's AI assistant.

Projects:

SETU:
AI-powered NGO and volunteer matching platform.

Sentilytics:
AI feedback analyzer using NLP.

Drishti:
3D GPS navigation system for specially abled people.

Skills:
Python
React
FastAPI
MongoDB
AI
Machine Learning
NLP

Goal:
Google Summer of Code 2027.
"""


@app.post("/chat")
def chat(req: ChatRequest):

    prompt = f"""
    {PORTFOLIO_CONTEXT}

    User:
    {req.message}
    """

    response = model.generate_content(
        prompt
    )

    return {
        "response":
        response.text
    }