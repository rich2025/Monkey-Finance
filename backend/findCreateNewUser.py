from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson.json_util import dumps
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['MonkeyFinance']
users = db.users

@app.route("/api/findCreateNewUser", methods=['POST'])
def find_or_create_user():
    data = request.json
    email = data['email']
    name = data['name']
    
    user = users.find_one({'email': email})
    if user:
        return jsonify(message='User found', user=json.loads(dumps(user))), 200
    else:
        # Default user information
        new_user = {
            'email': email,
            'name': name,
            'assets': []
        }
        users.insert_one(new_user)
        return jsonify(message='New user created', user=new_user), 201

if __name__ == '__main__':
    app.run(debug=True, port=7000)
