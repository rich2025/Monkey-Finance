import requests

list = ["MSFT", "AAPL", "NVDA", "AMZN", "META", "GOOG", "BRK.B", 
        "LLY", "AVGO", "TSLA", "JPM", "UNH", "V", "XOM", "JNJ", "MA", 
        "PG", "HD", "MRK", "COST", "ABBV", "CRM", "CVX", "AMD", "NFLX"]

for i in range(len(list)):
  url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={list[0]}&interval=5min&apikey=FF4KQM71L6X80J6O"
  r = requests.get(url)
  data = r.json()
  print(data)
