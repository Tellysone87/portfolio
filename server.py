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

@app.route('/project')
def load_project_page():
    """Return project page"""

    return render_template("project.html")

@app.route('/education')
def load_education_page():
    """Return education page"""

    return render_template("education.html")

@app.route('/contact')
def load_contact_page():
    """Return contact page"""

    return render_template("contact.html")

if __name__ == '__main__': # running flask web application
    app.run(debug=True, host='0.0.0.0')