// "use strict"; // Corer JS en modo estricto

// Objetos
const producto = {
    nombreProducto : "Monitos 20 Pulgadas",
    precio : 300,
    disponible : true
}

Object.seal(producto); // .freeze .seal
// producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));

producto.precio = 'NUEVO PRECIO';
delete producto.precio;

console.log(producto);