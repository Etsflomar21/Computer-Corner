// SLIDER HERO
const fondos = document.querySelectorAll(".hero-bg");

const imagenes = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg"
];

let actual = 0;
let capa = 0;

fondos[capa].style.backgroundImage = `url(${imagenes[0]})`;
fondos[capa].style.opacity = 1;

setInterval(() => {
    const siguiente = (capa + 1) % 2;
    actual = (actual + 1) % imagenes.length;

    fondos[siguiente].style.backgroundImage = `url(${imagenes[actual]})`;
    fondos[siguiente].style.opacity = 1;
    fondos[capa].style.opacity = 0;

    capa = siguiente;
}, 3000);

// MENU MOVIL
function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
}
