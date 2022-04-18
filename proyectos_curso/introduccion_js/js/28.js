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

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript', 120, '9876543456789')
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
