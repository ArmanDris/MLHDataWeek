import requests
from bs4 import BeautifulSoup

r = requests.get('https://cnn.com')
print(r.text)
