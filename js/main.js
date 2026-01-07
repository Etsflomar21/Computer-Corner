document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SLIDER HERO
    ========================= */
    const fondos = document.querySelectorAll(".hero-bg");

    const imagenes = [
        "img/slide1.jpg",
        "img/slide2.webp",
        "img/slide3.jpg"
    ];

    let index = 0;

    // Inicializar fondo
    fondos.forEach((fondo, i) => {
        fondo.style.backgroundImage = `url(${imagenes[i]})`;
        if(i === 0) fondo.classList.add("active");
    });

    // Cambiar imagen cada 3 segundos
    setInterval(() => {
        fondos[index].classList.remove("active");
        index = (index + 1) % fondos.length;
        fondos[index].classList.add("active");
    }, 3000);

    /* =========================
       MENU PANEL (MOBILE)
    ========================= */
    window.toggleMenu = function () {
        const menu = document.querySelector(".side-menu");
        const overlay = document.querySelector(".menu-overlay");
        if(menu && overlay){
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    };

});
