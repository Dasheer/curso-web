// querySelector
const heading = document.querySelector('#heading') // 0 o 1 Elemento
heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');


// getElementById
const heading2 = document.getElementById('heading');
