// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {
        nombre: "Monitor 20 pulgadas",
        precio: 500
    },
    {
        nombre: "Televisión 50 pulgadas",
        precio: 700
    },
    {
        nombre: "Tablet",
        precio: 300
    },
    {
        nombre: "Monitor 20 pulgadas",
        precio: 500
    },
    {
        nombre: "Audifonos",
        precio: 200
    },
    {
        nombre: "Teclado",
        precio: 500
    },
    {
        nombre: "Celular",
        precio: 500
    },
    {
        nombre: "Bocinas",
        precio: 500
    },
    {
        nombre: "Laptop",
        precio: 800
    }
];

// forEach
meses.forEach(function (mes) {
   if(mes == 'Marzo') {
       console.log('Marzo si existe')
   }
});

// Includes
let resultado = meses.includes('Diciembre');
// const resultado2 = carrito.includes('Celular');

// Some ideal para arreglo de objetos
resultado = carrito.some(function (producto){
    return producto.nombre === 'Celular'
})

// Reduce
resultado = carrito.reduce(function (total, producto){
    return total + producto.precio
}, 0);

// filter
resultado = carrito.filter(function (producto) {
    return producto.precio > 400
})

resultado = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular'
})


console.log(resultado);
