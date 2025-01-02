import requests
import time



async def simpleCalc(url: str):
    response = requests.get(url)
    ttfb = response.elapsed.total_seconds()
    return ttfb

async def advCalc(url: str, driver):

    driver.get(url)
    requestStart = driver.execute_script(
        "return window.performance.timing.requestStart"
    )
    
    responseStart = driver.execute_script(
        "return window.performance.timing.responseStart"
    )

    ttfb = (responseStart - requestStart)/1000
    return ttfb


    
