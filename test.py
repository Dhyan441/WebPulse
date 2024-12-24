import requests
url = "https://chess.com"
print(" step 1")
response = requests.get(url)
ttfb = response.elapsed.total_seconds()
print(" step 2")
print(f"Time to First Byte (TTFB): {ttfb} seconds")
