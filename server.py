# flask server files
from flask import Flask
from flask import request, render_template # importing needed flask functions
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined



@app.route('/')
def load_page():
    """Return home page"""

    return render_template("base.html")


if __name__ == '__main__': # running flask web application
    app.run(debug=True, host='0.0.0.0')