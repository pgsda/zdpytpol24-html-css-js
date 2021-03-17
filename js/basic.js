function change_bg(event) {
    event.target.style.backgroundColor = 'black';
}

function change_bg_default(event) {
    event.target.style.backgroundColor = '#A07C63';
}

var menu_elements = document.querySelectorAll('header>nav>a');

for (i = 0; i < menu_elements.length; i++) {
    menu_elements[i].addEventListener("mouseover", change_bg);
    menu_elements[i].addEventListener("mouseout", change_bg_default);
}
