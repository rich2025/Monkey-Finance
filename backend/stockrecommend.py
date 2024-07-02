import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route("/api/stockrecommend", methods=['GET'])
def stockrecommended():
    nltk.download('vader_lexicon')
    sia = SentimentIntensityAnalyzer()  # Create a SentimentIntensityAnalyzer object
    
    companies = ["Microsoft", "Apple", "Nvidia", "Amazon", "Meta", "Tesla", "JP Morgan", "Netflix", "Home Depot", "Costco"]
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

        total = 0
        for article in articles:
            description = article.get('description', '')
            if description:
                sentiment = sia.polarity_scores(description)
                total += sentiment["compound"]

        ranking.append((company, total))  # Change to store company name and sentiment

    ranking.sort(key=lambda x: x[1], reverse=True)  # Sort by sentiment score

    rankinglist = [{"company": company, "sentiment": score} for company, score in ranking]  # Prepare list with sentiment scores
    return jsonify(rankinglist)

if __name__ == "__main__":
        app.run(debug=True, port=8080)
