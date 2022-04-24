<?php include 'includes/header.php';

function usuarioAutenticado(bool $autenticado) : string {
    if ($autenticado) {
        return 'El usuario está autenticado';
    } else {
        return 'No autenticado';
    }

}

$usuario = usuarioAutenticado(true);
echo $usuario;



include 'includes/footer.php';