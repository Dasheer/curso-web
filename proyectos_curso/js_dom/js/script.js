// querySelector
const heading = document.querySelector('#heading') // 0 o 1 Elemento
heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


// getElementById
//const heading2 = document.getElementById('heading');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

// console.log(1);
//
// window.addEventListener('load',  () => { // load espera a que el JS y los archivos que dependan del HTML estén listos
//     console.log(2);
// });
//
// window.onload = () => {
//     console.log(3);
// }
//
// document.addEventListener('DOMContentLoaded', ()=> { //Solo espera por el HTML, pero no espera CSS o imágenes
//     console.log(4);
// });
//
// console.log(5);

// window.onscroll = () => {
//     console.log('scrolling...');
// }

// Selecionar Elemento y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
//
// btnEnviar.addEventListener('click', evento => {
//     console.log(evento);
//     evento.preventDefault();
//
//     // validar un formulario
//
//     console.log('enviando formulario');
//});

// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento de Submit
formulario.addEventListener('submit', e => {
    e.preventDefault();
    // Validar el formuario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');

        console.log('No debe haber campos vacios');
        return; // Corta la ejecución del código
    }

    // Crear la alerta
    mostrarMensaje('Formulario enviado con éxito');

    // Enviar formulario
    console.log('Enviando formulario...');
});

function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // console.log(error);

    // Desaparezca después de 5 seg
    setTimeout(() => {
        error.remove();
    }, 5000);
}

// Muestra un mensaje en pantalla indicando que se envío correctamente
function mostrarMensaje(mensaje) {
    const success = document.createElement('P');
    success.textContent = mensaje;
    success.classList.add('success');

    formulario.appendChild(success);

    setTimeout( () => {
        success.remove();
    }, 5000);
}