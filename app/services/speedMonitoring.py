from selenium import webdriver
from .ttfb import advCalc, simpleCalc
from .pageSize import rawData, getData
from .pageLoad import loadingTime
from .pageReq import totalReq

def selectBrowser(browser: str):
     
     if browser.lower() == "chrome":
         options = webdriver.ChromeOptions()
         options.add_argument('headless')
         return webdriver.Chrome(options)
     
     elif browser.lower() == "edge":
         options = webdriver.EdgeOptions()
         options.add_argument('headless')
         return webdriver.Edge(options)
     
     elif browser.lower() == "firefox":
         options = webdriver.FirefoxOptions()
         options.add_argument('headless')
         return webdriver.Firefox(options)
     
     elif browser.lower() == "safari":
         options = webdriver.SafariOptions()
         options.add_argument('headless')
         return webdriver.Safari(options)
     else:
        raise ValueError(f"Unsupported browser: {browser}. Please choose from 'chrome', 'edge', 'firefox', 'safari' or '' for a deafult browser.")

async def get_ttfb(url: str, browser: str):

    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url 
    try:
        if(browser.lower() == "default"):
            return await simpleCalc(url)

        driver = selectBrowser(browser)
        ttfb = await advCalc(url, driver)
        driver.quit()

        return ttfb


    except ValueError as e:
        raise ValueError(e)



async def get_page_size(url: str, browser):
    
    try:

        if not url.startswith("http://") and not url.startswith("https://"):
            url = "https://" + url 

        if (browser == "default"):
            driver = selectBrowser("chrome")
        else:
            driver = selectBrowser(browser)

        data = await getData(url, driver)
        driver.quit()
        return data

    except ValueError as e:
        raise ValueError(e)
    


async def get_PageLoad(url: str, browser: str):
    
    try:
        if not url.startswith("http://") and not url.startswith("https://"):
            url = "https://" + url 

        if (browser == "default"):
            driver = selectBrowser("chrome")
        else:
            driver = selectBrowser(browser)

        time = await loadingTime(url, driver)
        driver.quit()
        return time


    except ValueError as e:
        raise ValueError(e)


async def get_totalRequests(url: str, browser: str):

    try:
        if not url.startswith("http://") and not url.startswith("https://"):
            url = "https://" + url 

        if (browser == "default"):
            driver = selectBrowser("chrome")
        else:
            driver = selectBrowser(browser)

        total = await totalReq(url, driver)
        driver.quit()

        return total

    
    except ValueError as e:
        raise ValueError(e)

