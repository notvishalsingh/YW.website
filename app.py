from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "<U>Hello World</U>"

@app.route('/Rules')
def rules():
    return "<H1>Follow the rules</H1>"

@app.route('/greet/<name>')
def greet(name):
    return "<f>Hello {name}"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5555, debug=True)
