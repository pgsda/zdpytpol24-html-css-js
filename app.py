from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/products')
def products():
    return render_template('produkty.html')


@app.route('/bye/<int:siemanko>')
def bye(siemanko):
    return f'Bye, World {siemanko}'
