import random
from flask import jsonify,request,Flask
from flask_cors import CORS, cross_origin
import pandas as pd

NarutoApi = Flask(__name__)
cors = CORS(NarutoApi)
NarutoApi.config['CORS_HEADERS'] = 'Content-Type'

df = pd.read_csv('finalQuotes.csv',sep=';', header=0, names=['Id','Speakers', 'Quotes', 'Source'])

def get_random_quote(excluded_id = '-1'):
    rq = random.randint(0, len(df)-1)
    quote_id = df.values[rq][0]
    for i in range(1, 20):
        if quote_id != excluded_id:
            break
        rq = random.randint(0, len(df)-1)
        quote_id = df.values[rq][0]
    speaking = df.values[rq][1]
    quote = df.values[rq][2]
    quote_src = df.values[rq][3]
    quote_obj = {"id":quote_id, "speaker": speaking, "quote": quote, "src": quote_src}
    return quote_obj

@cross_origin()

@NarutoApi.route('/', methods=['GET'])
def dashboard():
    return jsonify(get_random_quote())

@NarutoApi.route('/<excluded_id>', methods=['GET'])
def exclusive(excluded_id):
    return jsonify(get_random_quote(excluded_id))

if __name__ == '__main__':
    NarutoApi.run(host= '127.0.0.1', port=5000)
