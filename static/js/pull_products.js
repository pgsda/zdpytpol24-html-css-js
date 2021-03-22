function add_to_cart(product_id) {
    var cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = [];
    }

    if (!cart[product_id]) {
        cart[product_id] = 1;
    } else {
        cart[product_id]++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function pull_products() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        var p = JSON.parse(this.responseText);
        var tbody = document.getElementById('products');

        tbody.innerHTML = '';

        for (var i = 0; i < p.length; i++) {
            tbody.innerHTML +=
                '<tr>' +
                '<td>' + p[i]['name'] + '</td>' +
                '<td>' + p[i]['price'] + ' zł</td>' +
                '<td><input type="button" onclick="add_to_cart(' + i + ')"' +
                ' value="Dodaj do koszyka"></td>' +
                '</tr>';
        }
    }

    xhttp.open("GET", "/static/produkty.json", true);
    xhttp.send();
}

window.addEventListener('load', function () {
    document.getElementsByName('load')[0].addEventListener('click', pull_products);
    pull_products();
});
