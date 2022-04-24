<?php include 'includes/header.php';

require 'funciones.php';

initApp();

/**
 * include() dependiendo de la configuración si no encuentra el archivo
 * sigue ejecutandose
 *
 * requiere() si no encuentra el archivo deja de ejecutar todo
 *
 * requiere_one() es exactamente igual con la diferencia que si el archivo
 * ya fue incluido, lo ignora, si no ha sido incluido, lo va a incluir
 **/

include 'includes/footer.php';