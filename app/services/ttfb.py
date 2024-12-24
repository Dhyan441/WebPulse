import requests
import time



#simple solution

async def simpleCalc(url: str):
    response = requests.get(url)
    ttfb = response.elapsed.total_seconds()
    print(f"Time to First Byte (TTFB): {ttfb} seconds")
    return ttfb

async def advCalc(url: str, driver):

    driver.get(url)
    requestStart = driver.execute_script(
        "return window.performance.timing.requestStart"
    )
    
    responseStart = driver.execute_script(
        "return window.performance.timing.responseStart"
    )

    # Calculate Time to First Byte (TTFB)
    ttfb = (responseStart - requestStart)/1000 #convert from milliseconds
    return ttfb


    
