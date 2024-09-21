
//estos son para buscar en directo podecirlo asi, usmos las clases para poder ubicar bien
//el contenido, e las primeras  y la utlima muestra la palbra que buscamos y la imagen que le sigue
//la segunda solo logre adaptarlo para el aside
document.addEventListener("keyup", e => {
    if (e.target.matches("#search")) {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll(".campeone").forEach((campeon, index) => {
            const shouldShow = campeon.textContent.toLowerCase().includes(searchTerm);
            campeon.classList.toggle("filtro", !shouldShow);
            
            // Seleccionar la imagen siguiente al campeón actual
            const imagen = campeon.nextElementSibling;
            if (imagen && imagen.tagName === "IMG") {
                imagen.classList.toggle("filtro", !shouldShow);
            }
        });
    }
});

document.addEventListener("keyup", e => {
    if (e.target.matches("#search")) {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll(".consejo").forEach((consejo, index) => {
            const shouldShow = consejo.textContent.toLowerCase().includes(searchTerm);
            consejo.classList.toggle("filtro", !shouldShow);
            
        });
    }
});

document.addEventListener("keyup", e => {
    if (e.target.matches("#search")) {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll(".ciudad").forEach(ciudad => {
            const shouldShow = ciudad.textContent.toLowerCase().includes(searchTerm);
            const section = ciudad.nextElementSibling;
            const sliderContainer = section.nextElementSibling;
            
            ciudad.classList.toggle("filtro", !shouldShow);
            section.classList.toggle("filtro", !shouldShow);
            sliderContainer.classList.toggle("filtro", !shouldShow);
        });
    }
});


// con esta funcion estamos llamdo la secion del iner para pdoer ir pasando las imagenes y hacemos que en automatico pasae el porcentaje que viene siendo el numeo de la imagen por asi decirlo
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((slider, sliderIndex) => {
        const sliderInner = slider.querySelector(".slider--inner");
        const images = sliderInner.querySelectorAll("img");
        let currentIndex = 0;

        function slideImages() {
            currentIndex = (currentIndex + 1) % images.length;
            sliderInner.style.transform = `translateX(-${currentIndex * (100 / images.length)}%)`;
        }

        // Iniciar el intervalo para cada slider
        setInterval(slideImages, 3000 + (sliderIndex * 500)); // Offset para cada slider
    });
});
