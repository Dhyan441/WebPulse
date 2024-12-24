from selenium import webdriver


def selectBrowser(browser: str):
     
     if browser.lower() == "chrome":
         return webdriver.Chrome()
     elif browser.lower() == "edge":
        return webdriver.Edge()
     elif browser.lower() == "firefox":
         return webdriver.Firefox()
     elif browser.lower() == "safari":
         return webdriver.Safari()
     else:
        raise ValueError(f"Unsupported browser: {browser}. Please choose from 'chrome', 'edge', 'firefox', 'safari' or '' for a deafult browser.")

async def get_ttfb(url: str, browser: str):

    # if the browser method is not defined just use the simple method
    try:
        if(browser == ""):
            print("default ttfb")


        driver = selectBrowser(browser)

        print("Success")

    except ValueError as e:
        raise ValueError(e)

async def get_page_size(url: str, browser: str):

    print("Success")

async def get_PageLoad(url: str, browser: str):

    print("Success")

async def get_ServerResponse(url: str, browser: str):

    print("Success")

async def get_totalRequests(url: str, browser: str):
    print("success")


