var xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    document.querySelector('main section.right').innerHTML = this.responseText;
}

xhttp.open("GET", "produkty.txt", true);
xhttp.send();
