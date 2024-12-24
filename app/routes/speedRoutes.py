from fastapi import APIRouter
from fastapi.responses import JSONResponse
from app.services.speedMonitoring import get_ttfb, get_page_size, get_PageLoad, get_ServerResponse, get_totalRequests


router = APIRouter()

# Time from request to reciveing the first byte, including DNS lookup, connection time and server response time
@router.get("/ttfb/")
async def ttfb(url: str, browser: str):

    try:
        return {"ttfb": await get_ttfb(url, browser)}
    
    except ValueError as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)     

@router.get("/pageSize/")
async def page_size(url: str, browser: str):
    return {"pageSize": await get_page_size(url, browser)}
 

# More comprehensive and includes all browser-side processes such as resource loading, rendering, and script execution.
@router.get("/totalPageLoad/")
async def total_page_load (url: str, browser: str):
    try:
        return {"totalPageLoad": await get_PageLoad(url, browser)}

    except ValueError as e:
        return JSONResponse(content={"error": str(e)}, status_code=400) 

@router.get("/serverResponse/")
async def server_response(url: str, browser: str):
    try:
        return {"serverResponse": await get_ServerResponse(url, browser)}

    except ValueError as e:
        return JSONResponse(content={"error": str(e)}, status_code=400) 

@router.get("/totalRequests/")
async def total_requests(url: str, browser: str):
    
    try:
        return {"totalRequests": await get_totalRequests(url, browser)}

    except ValueError as e:
        return JSONResponse(content={"error": str(e)}, status_code=400) 





