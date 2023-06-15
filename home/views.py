from flask import Blueprint, render_template, request

home = Blueprint('home', __name__, template_folder='templates', static_folder='static')


@home.route('/', methods=["POST", "GET"])
def home_page():
    if request.method == "POST":
        name = request.form["name"]
        return render_template('GreetingPage.html', name=name)
    else:
        return render_template('index.html')