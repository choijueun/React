import os
from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(20)

@app.route('/test')
def test():
    return "TEST"


if __name__ == "__main__":
    app.run(debug=True)