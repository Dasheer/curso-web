// Objetos
const producto = {
    nombreProducto : "Monitos 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Fomra anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const { precio, nombreProducto } = producto;
// const { nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);