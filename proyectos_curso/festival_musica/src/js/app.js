document.addEventListener('DOMContentLoaded',() => {
   initApp();
});

function initApp() {
    createGaleria();
}

function createGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    galeria.textContent = 'Vamos a crear la galeria';
}