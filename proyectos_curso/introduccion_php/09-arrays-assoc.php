<?php include 'includes/header.php';

$cliente = [
    'nombre' => 'Daniel',
    'saldo'  =>  200,
    'informacion' => [
        'tipo' => 'Premium',
        'disponible' => 100
    ]
];

echo '<pre>';
var_dump($cliente['nombre']);
echo '<pre>';

echo $cliente['nombre'];

//echo $cliente['informacion']['tipo'];

$cliente['codigo'] = 1233454;
echo '<pre>';
var_dump($cliente);
echo '<pre>';


include 'includes/footer.php';