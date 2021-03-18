function pull_products() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        var p = JSON.parse(this.responseText);

        document.getElementById('products').innerHTML = '';

        for (var i = 0; i < p.length; i++) {
            document.getElementById('products').innerHTML +=
                '<tr><td>' + p[i]['name'] + '</td></tr>';
        }
    }

    xhttp.open("GET", "produkty.json", true);
    xhttp.send();
}

document.getElementsByName('load')[0].addEventListener('click', pull_products);
