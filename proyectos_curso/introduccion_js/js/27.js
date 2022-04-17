// POO

/** Object Literal **/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/** Object Constructor **/

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Daniel', 'Pech');

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, false);
const producto3 = new Producto('Laptop', 300, true);
const producto4 = new Producto('Celular', 250, true);
const producto5 = new Producto('CPU', 600, false);

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

// function  formatearProducto(producto) {
//     return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
// }

console.log(cliente.formatearCliente());

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());
console.log(producto5.formatearProducto());

