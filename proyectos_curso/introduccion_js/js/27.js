// POO

/** Object Literal **/
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/** Object Constructor **/

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, false);
const producto3 = new Producto('Laptop', 300, true);
const producto4 = new Producto('Celular', 250, true);
const producto5 = new Producto('CPU', 600, false);


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);