// Menu Mobile

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
const nav = document.getElementById('nav');

nav.classList.toggle('active');

const active = nav.classList.contains('active');

event.currentTarget.setAttribute('aria-expanded', active);
if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Altura Header

function alturaHeaderMenu() {
    console.log("qualquer coisa")
        const header = document.getElementById("header");
        const menu = document.getElementById("menu");
        const alturaHeader = header.offsetHeight;
        menu.style.top = alturaHeader + "px";
        menu.style.marginTop = "0px";
        console.log(menu.style.top)
        console.log(header.offsetHeight)
}

window.addEventListener("load", alturaHeaderMenu)
btnMobile.addEventListener("click", alturaHeaderMenu)