/* =========================
   SLIDER HERO (SOLO INDEX)
========================= */
const fondos = document.querySelectorAll(".hero-bg");

if (fondos.length > 0) {
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
}

/* =========================
   MENU PANEL
========================= */
function toggleMenu() {
    const menu = document.querySelector(".side-menu");
    const overlay = document.querySelector(".menu-overlay");

    if (menu && overlay) {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

/* =========================
   CARRUSEL PRODUCTOS
========================= */
function scrollCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    if (!track) return;

    const scrollAmount = 260;

    track.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
