import requests

url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=FF4KQM71L6X80J6O'
r = requests.get(url)
data = r.json()

print(data)
