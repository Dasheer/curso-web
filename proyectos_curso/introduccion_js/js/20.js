
// Método de propiedad
const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar : function () {
        console.log('Pausando...');
    },
    crearPlayList: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlayList: function (nombre) {
        console.log(`Reproduciendo ${nombre}`)
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción ${id}`);
}

reproductor.reproducir(2840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Favoritas');
reproductor.reproducirPlayList('Favoritas');