from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

templates = [
    {
        "inputs": 8,
        "category": "Animals",
        "word1": "pangolin"
    },
    {
        "inputs": 5,
        "category": "Furniture",
        "word1": "table"
    },
    {
        "inputs": 5,
        "category": "Plants",
        "word1": "basil"
    },
    {
        "inputs": 8,
        "category": "Technology",
        "word1": "keyboard"
    }

]

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/get-template")
def get_template():
  return jsonify({
        "status": "success",
        "puzzle": random.choice(templates)
  })

if __name__ == '__main__':
  app.run()