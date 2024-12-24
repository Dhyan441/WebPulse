from selenium import webdriver


async def loadingTime(url: str, driver):

    driver.get(url)

    driver.implicitly_wait(5)

    timing = driver.execute_script(
        "return window.performance.timing"
    )

    requestStart = timing['requestStart']
    domComplete = timing['domComplete']

    # Calculate Time to First Byte (TTFB)
    loadTime = (domComplete - requestStart)/1000 #convert from milliseconds
    return loadTime