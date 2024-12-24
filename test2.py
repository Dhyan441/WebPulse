from selenium import webdriver


def time_url(driver, url):
    driver.get(url)

    navigation_start = driver.execute_script(
        "return window.performance.timing.navigationStart")
    dom_complete = driver.execute_script(
        "return window.performance.timing.domComplete")
    total_time = dom_complete - navigation_start

    print(f"Time {total_time}ms")


driver = webdriver.Firefox()

try:
    url = "https://httpbin.org/delay/"
    time_url(driver, url + '1')
    time_url(driver, url + '2')

finally:
    driver.close()
