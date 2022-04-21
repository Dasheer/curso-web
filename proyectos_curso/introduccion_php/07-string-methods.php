<?php include 'includes/header.php';

$nombreCliente = "Daniel Eduardo";

// conocer la extension de un string
echo strlen($nombreCliente);
var_dump($nombreCliente);

// eleminar espacios en blanco
$texto = trim($nombreCliente);
echo strlen($texto);

// convertirlo a mayusculas
echo strtoupper($nombreCliente);

// convertirlo a minusculas
echo strtolower($nombreCliente);

$mail1 = 'correo@correo.com';
$mail2 = 'Correo@corre.com';

var_dump(strtolower($mail1) === strtolower($mail2));

echo str_replace('Eduardo', 'D', $nombreCliente);

echo strpos($nombreCliente, 'Edward');

$tipoCliente = 'Premium';

echo 'El cliente ' . $nombreCliente . ' es ' . $tipoCliente;

echo "El cliente ${nombreCliente} es ${tipoCliente}";

include 'includes/footer.php';