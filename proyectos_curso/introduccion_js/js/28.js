// Clases

class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, false);
const producto3 = new Producto('Laptop', 300, true);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());