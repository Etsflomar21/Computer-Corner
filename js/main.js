document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SLIDER HERO
    ========================= */
    const fondos = document.querySelectorAll(".hero-bg");

    if (fondos.length >= 2) {
        const imagenes = [
            "img/slide1.jpg",
            "img/slide2.webp",
            "img/slide3.jpg"
        ];

        let actual = 0;
        let capa = 0;

        fondos[capa].style.backgroundImage = `url(${imagenes[actual]})`;
        fondos[capa].style.opacity = 1;

        setInterval(() => {
            const siguiente = (capa + 1) % fondos.length;
            actual = (actual + 1) % imagenes.length;

            fondos[siguiente].style.backgroundImage = `url(${imagenes[actual]})`;
            fondos[siguiente].style.opacity = 1;
            fondos[capa].style.opacity = 0;

            capa = siguiente;
        }, 3000); // cada 3 segundos
    }

    /* =========================
       MENU PANEL MOBILE
    ========================= */
    window.toggleMenu = function () {
        const menu = document.querySelector(".side-menu");
        const overlay = document.querySelector(".menu-overlay");

        if (menu && overlay) {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    };

});
