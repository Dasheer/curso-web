// This

const reservacion = {
    nombre: 'Daniel',
    apellido: 'Pech',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó, y su cantidad a pagar es de ${this.total}`);
    }
}

//reservacion.informacion();