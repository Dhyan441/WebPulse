import requests
import time
url = "https://www.Tutorialspoint.com"  
start_time = time.time()
response = requests.get(url)
end_time = time.time()
loading_time = end_time - start_time
print(f"The loading time for the website {url} is {loading_time} seconds.")