from fastapi import FastAPI
from .routes import speedRoutes

app = FastAPI()

app.include_router(speedRoutes.router)

@app.get("/")

def root():
    return {"message": "Welcome to WebPulse -- Use the ttfb endpoint to get the time to first byte and use the page-size endpint to get the size of a web page "}

