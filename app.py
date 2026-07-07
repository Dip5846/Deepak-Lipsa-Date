from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/date", methods=["POST"])
def date():
    return render_template("date.html")

@app.route("/food", methods=["POST"])
def food():
    selected_date = request.form.get("date")
    return render_template("food.html", selected_date=selected_date)

from datetime import datetime

@app.route("/success", methods=["POST"])
def success():

    selected_date = request.form["date"]
    selected_food = request.form["food"]

    with open("responses.txt", "a", encoding="utf-8") as file:
        file.write("====================================\n")
        file.write(f"Time : {datetime.now()}\n")
        file.write("Name : Lipsa\n")
        file.write(f"Date : {selected_date}\n")
        file.write(f"Food : {selected_food}\n")
        file.write("====================================\n\n")

    return render_template(
        "success.html",
        selected_date=selected_date,
        selected_food=selected_food
    )

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)