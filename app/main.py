from fastapi import FastAPI
from .routes import speedRoutes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(speedRoutes.router)

@app.get("/")

def root():
    return {"message": "Welcome to WebPulse -- Use the ttfb endpoint to get the time to first byte and use the page-size endpint to get the size of a web page "}

