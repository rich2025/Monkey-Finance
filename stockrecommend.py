import nltk
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
import requests
import json

#getting articles
api_key = '462a6fc6766243ad8ff24bd2de94548b'
url = 'https://newsapi.org/v2/everything'

params = {
    'q': 'Amazon',  # Search query
    'pageSize': 5,  # Limit the number of articles
    'apiKey': api_key
}

response = requests.get(url, params=params)
data = response.json()  # The response data

#print(data)

articles = data['articles']

for article in articles:
    print(article['title'])
    print(article['url'])
    print(article['description'])
    print('-' * 80)  # Print a separator line

nltk.download('punkt')

description = articles[0]['description']
tokens = word_tokenize(description.lower())  # Tokenize and convert to lower case
freq_dist = FreqDist(tokens)

for word, frequency in freq_dist.items():
    print(word, frequency)
