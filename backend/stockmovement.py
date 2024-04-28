import requests
from datetime import date, timedelta
from flask import Flask, jsonify

#creates instance of a Flask class, represents our web app and central obj for managing
app = Flask(__name__)

# decorator that is built to handle a HTTP GET request if the incoming request url matches /api/stockmovement endpoint
@app.route("/api/stockmovement", methods=['GET'])
def stockmovement():
    tickerSym = ["MSFT", "AAPL", "NVDA", "AMZN", "META", "TSLA", "JPM", "COST", "HD", "NFLX"]
    priceMovements = {key: {} for key in tickerSym}

    for tickSym in tickerSym:
        url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={tickSym}&apikey=KFNQIX5HY3JX8815"
        response = requests.get(url)

        if response.status_code != 200:
            print(f"Failed to fetch data for {tickSym}")
            continue

        data = response.json()
        time_series = data.get("Time Series (Daily)")
        if not time_series:
            print(f"No time series data found for {tickSym}")
            continue

        currentDate = date.today()
        dayBefore = currentDate

        for j in range(30):
            while str(dayBefore) not in time_series:
                dayBefore = dayBefore - timedelta(days=1)

            open_price = float(time_series[str(dayBefore)]["1. open"])
            close_price = float(time_series[str(dayBefore)]["4. close"])
            priceMovements[tickSym][str(dayBefore)] = [open_price, close_price]

            if j == 0:
                priceMovements[tickSym]["RecentClose"] = close_price

            dayBefore = dayBefore - timedelta(days=1)

    return jsonify(priceMovements)

#condition checks if the script is run as a main program and not imported as a module 
# will only run is script is executed directly  
if __name__ == "__main__":
    # starts flask application and start listening to oncoming requests, will listen from port 8081
    app.run(debug=True, port=8081)
