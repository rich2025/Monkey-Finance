import requests
from datetime import date, timedelta

#list of stocks tracked; these have to be manually updated/changed
tickerSym = ["MSFT", "AAPL", "NVDA", "AMZN", "META", "TSLA", "JPM", "COST", "CRM", "HD", "NFLX"]

#initialize hashtable containing keys of each ticker symbol
#store, within each ticker symbol key, another dictionary of the last 30 points (days) of data
#each of these has their dates (strings) as keys
#within these, store an array of size 2: [market open value, market close value]
priceMovements = {key: {} for key in tickerSym}

#collects and organizes data for each stock (daily price movements)
for i in range(len(tickerSym)):
  tickSym = tickerSym[i]

  url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={tickerSym[0]}&apikey=KFNQIX5HY3JX8815"
  response = requests.get(url) #for this iteration (particular company), store HTTP request data into "response" variable
  data = response.json() #convert data into python dictionary

  #data (python dictionary) itself has 2 keys: "Meta Data" (ignore), and "Time Series (Daily)"
  #"Time Series (Daily)" contains dictionaries with keys "[YYYY/MM/DD]" (date)
  #"[YYYY/MM/DD]" (date) holds 5 keys... we only need:
  #1.) key string "1. open" (market open)
  #2.) key string "4. close" (market close)

  currentDate = date.today()
  dayBefore = currentDate #initialize to currentDate

  #iterate over last 30 days of data
  for j in range(1, 30):
      #first check whether there is data for today; if there isn't one, then find the most recent point of data
      #shouldn't take more than ~5-10 iterations
      while True:
          if str(currentDate) in data:
              dayBefore = str(currentDate)
              break
          else:
              dayBefore = dayBefore - timedelta(days=1)
              if str(dayBefore) in data:
                  dayBefore = str(dayBefore)
                  break

      #now, dayBefore holds the date of the most recent point of data (as a string)

      #find market open and market close values
      #add them to priceMovements dictionary
      open = int(data["Time Series (Daily)"][dayBefore]["1. open"])
      close = int(data["Time Series (Daily)"][dayBefore]["4. close"])
      priceMovements[tickSym][dayBefore] = [open, close]





  #print(data)