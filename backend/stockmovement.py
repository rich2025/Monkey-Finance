import requests
from datetime import date, timedelta
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/stockmovement", methods=['GET'])
def stockmovement():
    tickerSym = ["MSFT", "AAPL", "NVDA", "AMZN", "META", "TSLA", "JPM", "COST", "CRM", "HD", "NFLX"]
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

if __name__ == "__main__":
    app.run(debug=True, port=8081)
