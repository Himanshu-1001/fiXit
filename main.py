from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import generate_response
app = FastAPI()

class Query(BaseModel):
    info: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://fixit-khaki.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


@app.post("/bot")
def interact_with_bot(query: Query):
    response=generate_response(query.info)
    return {"response": response}
