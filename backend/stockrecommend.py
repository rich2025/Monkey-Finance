import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/stockrecommend", methods=['GET'])

def stockrecommended():
    nltk.download('vader_lexicon')
    sia = SentimentIntensityAnalyzer()  # Create a SentimentIntensityAnalyzer object
    
    # List of stocks tracked; these have to be manually updated/changed
    # (alternatively, we could have this as a function input)
    companies = ["Microsoft", "Apple", "Nvidia", "Amazon", "Meta", "Tesla", "JP Morgan", "Netflix", "Home Depot", "Costco", "SalesForce"]
    ranking = []
    for company in companies:
        api_key = '0865f3a049a5490db951f7bbbd6e189d'
        url = 'https://newsapi.org/v2/everything'

        params = {
            'q': company,  # Search query
            'pageSize': 20,  # Limit the number of articles
            'apiKey': api_key
        }

        response = requests.get(url, params=params)
        data = response.json()  # The response data
        articles = data['articles']

        # Assuming `articles` is your list of articles from the News API response
        total = 0
        for article in articles:
            # Analyzing the description field
            description = article.get('description', '')
            if description:
                sentiment = sia.polarity_scores(description)
                total += sentiment["compound"]

        ranking.append((total, company))

    ranking.sort(reverse=True)

    rankinglist = [company for _, company in ranking]
    return jsonify(rankinglist)

if __name__ == "__main__":
        app.run(debug=True, port=8080)
