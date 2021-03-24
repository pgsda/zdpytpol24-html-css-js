from flask import redirect, request, Flask, render_template
from statistics import mean

app = Flask(__name__)

comments_list = [{
    'nick': 'Piotrek',
    'rating': 3,
    'comment': 'costam'
}, {
    'nick': 'Mirek',
    'rating': 4,
    'comment': 'costam'
}]


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/products')
def products():
    return render_template('produkty.html')


@app.route('/comments')
def comments():
    avg = mean([c['rating'] for c in comments_list])
    return render_template('komentarze.html', cl=comments_list, rating_avg=avg)


@app.route('/add_comment', methods=['POST'])
def add_comment():
    comments_list.append({
        'nick': request.form.get('nick'),
        'rating': int(request.form.get('rating')),
        'comment': request.form.get('comment')
    })
    return redirect('/comments')
