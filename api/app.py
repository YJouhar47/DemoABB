import json
import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
CORS(app)


@app.route('/')
def doctor():
    response = requests.get(
        f'https://data.stad.gent/api/records/1.0/search/?dataset=locaties-huisartsen-gent')
    data = response.json()
    return data


@app.route('/doctors/<string:doctor_id>')
def doctorwithid(doctor_id):
    try:
        response = requests.get(
            f'https://data.stad.gent/api/records/1.0/search/?dataset=locaties-huisartsen-gent&q={doctor_id}')
        data = response.json()
        if data["nhits"] != 0:
            return data
        else:
            raise Exception("ID not found.")
            
    except Exception as e:
        return jsonify({"nhits": "0"})


if __name__ == '__main__':
    app.run()
