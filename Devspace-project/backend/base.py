from flask import Flask

api = Flask(__name__)

@api.route('/landing')
def landing():
    response_body={
        "name": "Kashish",
        "about": "HELLO"
    }

    return response_body
