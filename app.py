from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/success", methods=["POST"])
def success():

    data = request.get_json()

    with open("responses.txt", "a", encoding="utf-8") as file:
        file.write("=================================\n")
        file.write(f"Time : {datetime.now()}\n")
        file.write(f"Date : {data['date']}\n")
        file.write(f"Food : {data['food']}\n")
        file.write("=================================\n\n")

    return jsonify({"status": "success"})

if __name__ == "__main__":
    app.run(debug=True)