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

    xhttp.open("GET", "produkty.json", true);
    xhttp.send();
}

window.addEventListener('load', function () {
    document.getElementsByName('load')[0].addEventListener('click', pull_products);
    pull_products();
});
