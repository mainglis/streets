from flask import Flask, flash, render_template, url_for, request, json, redirect, session, make_response, Response

app = Flask(__name__)

# @app.route('/')
# def index():
#     return "<span style='color:red'>I am app 1</span>"


@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

# @app.route("/test")
# def hi():
#     return index.html

@app.route('/<string:page_name>/')
def static_page(page_name):
    return render_template('%s.html' % page_name)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
