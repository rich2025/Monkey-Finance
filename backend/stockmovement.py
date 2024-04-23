import requests
from datetime import date, timedelta

priceMovements = {}

def stockmovement():
#list of stocks tracked; these have to be manually updated/changed
    tickerSym = ["MSFT", "AAPL", "NVDA", "AMZN", "META", "TSLA", "JPM", "COST", "CRM", "HD", "NFLX"]

    #initialize hashtable containing keys of each ticker symbol
    #store, within each ticker symbol key, another dictionary of the last 30 points (days) of data
    #each of these has their dates (strings) as keys
    #within these, store an array of size 2: [market open value, market close value]
    priceMovements = {key: {} for key in tickerSym}

    #adds, for every stock, a key to easily access the most recent close value
    for stock in tickerSym:
        priceMovements[stock]["RecentClose"] = 0

    #collects and organizes data for each stock (daily price movements)
    for i in range(len(tickerSym)):
        tickSym = tickerSym[i]

        url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={tickerSym[0]}&apikey=KFNQIX5HY3JX8815"
        response = requests.get(url) #for this iteration (particular company), store HTTP request data into "response" variable

        if response.status_code != 200:
            print(f"Failed to fetch data for {tickSym}")
            continue
  
        data = response.json() #convert data into python dictionary
        time_series = data.get("Time Series (Daily)")
        if not time_series:
            print(f"No time series data found for {tickSym}")
            continue

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
        while str(dayBefore) not in data["Time Series (Daily)"]:
            dayBefore = dayBefore - timedelta(days=1)

        #now, dayBefore holds the date of the most recent point of data (as a string)

        #find market open and market close values
        #add them to priceMovements dictionary
        open = float(data["Time Series (Daily)"][str(dayBefore)]["1. open"])
        close = float(data["Time Series (Daily)"][str(dayBefore)]["4. close"])
        priceMovements[tickSym][str(dayBefore)] = [open, close]

        if j == 1:
            priceMovements[tickSym]["Recent"] = close

        dayBefore = dayBefore - timedelta(days=1)

    return priceMovements

if True:
    stockmovement()
    print(priceMovements)