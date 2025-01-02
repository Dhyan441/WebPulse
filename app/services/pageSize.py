from urllib import request, error
from selenium import webdriver


def rawData(url: str):

    url = "https://google.com"

    test = request.urlopen(url)
    return len(test.read())

async def getData(url: str, driver):

    driver.get(url)
    logs = driver.execute_script(
        "return window.performance.getEntries();"
    )

    transferSize = 0
    renderSize = 0

    for log in logs:
        if 'transferSize' in log:
            transferSize += log['transferSize']
        if 'decodedBodySize' in log:
            renderSize += log['decodedBodySize']
    
    return {"renderSize": renderSize/1024, "transferSize": transferSize/1024}





