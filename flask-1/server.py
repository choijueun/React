from flask import Flask

app = Flask(__name__)


@app.route('/test-endpoint', methods=['GET'])
def test():
    return "Test endpoint return"


if __name__ == "__main__":
    app.run(port=8888, debug=True)