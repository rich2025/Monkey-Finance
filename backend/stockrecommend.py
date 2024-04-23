import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
import requests
import json
from nltk.sentiment import SentimentIntensityAnalyzer

def stockrecommended():
    nltk.download('vader_lexicon')
    sia = SentimentIntensityAnalyzer() #Create a SentimentIntensityAnalyzer object

    #articles of interest (needs to be updated/changed manually)
    list = ["Microsoft", "Apple", "Nvidia", "Amazon", "Meta",  "Tesla", "JP Morgan", "Netflix", "Home Depot", "Costco", "SalesForce"]
    ranking = []
    for company in list:
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
            #print("Title:", article['title'])
            #print("URL:", article['url'])

            # Analyzing the description field
            description = article['description']
            if description:
                sentiment = sia.polarity_scores(description)
                #print("Sentiment Scores:", sentiment)
                articlesen = sentiment["compound"]
                total += articlesen
                #print(sentiment["compound"])
            else:
                print("No description available.") 

        ranking.append((total, company))
        ranking.sort(reverse=True) 


    #sort from highest to lowest
    rankinglist = []
    while ranking:
        rankinglist.append(ranking.pop(0))
    
    
    #print(rankinglist)
    return rankinglist
