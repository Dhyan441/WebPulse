from selenium import webdriver
from .ttfb import advCalc, simpleCalc
from .pageSize import rawData, getData
from .pageLoad import loadingTime

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
    # if the browser method is not defined just use the simple method
    try:
        if(browser.lower() == "default"):
            print("default ttfb")
            return await simpleCalc(url)

        driver = selectBrowser(browser)
        ttfb = await advCalc(url, driver)
        driver.quit()

        return ttfb

        print("Success")

    except ValueError as e:
        raise ValueError(e)



async def get_page_size(url: str, browser):

    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url 

    # Method 1 - read the pages raw data as bytes
    # return rawBytes(url)
    if (browser == "default"):
        driver = selectBrowser("chrome")
    else:
        driver = selectBrowser(browser)

    # Method 2 - getting post render data and transfer size data
    data = await getData(url, driver)
    driver.quit()
    return data
    


async def get_PageLoad(url: str, browser: str):
    
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url 

    if (browser == "default"):
        driver = selectBrowser("chrome")
    else:
        driver = selectBrowser(browser)

    time = await loadingTime(url, driver)
    driver.quit()
    return time



async def get_totalRequests(url: str, browser: str):
    print("success")


#  def get_server_response_time(url):
#     driver = webdriver.Firefox()
#     try:
#         driver.get(url)
#         response_time = driver.execute_script(
#             "return window.performance.timing.responseStart - window.performance.timing.requestStart"
#         )
#         print(f"Server response time: {response_time} ms")
#     finally:
#         driver.quit()