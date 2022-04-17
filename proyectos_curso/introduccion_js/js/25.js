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

// ForEach
carrito.forEach( producto => console.log(producto.nombre));

// Map
const arreglo = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo);
