<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if ($autenticado && $admin) {
    echo 'Usuario autendicado correctamente';
} else {
    echo 'Usuario no autenticado, inicia sesión';
}

// If anidados
$cliente = [
    'nombre' => 'Daniel',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'Premium'
    ]
];

echo '<br>';

if(!empty($cliente)) {
    echo 'El arreglo de cliente no está vacío';
    if ($cliente['saldo']  > 0) {
        echo 'Saldo disponible';
    } else {
        echo 'Saldo insuficiente';
    }
}

// else if
echo '<br>';

if ($cliente['saldo'] > 0) {
    echo 'Saldo disponible';
} else if ($cliente['informacion']['tipo'] === 'Premium') {
    echo 'Premium';
} else {
    echo 'sin datos';
}

// swtich
echo '<br>';
$tecnologia = 'PHP';

switch ($tecnologia) {
    case 'PHP':
        echo "PHP, un excelente lenguaje";
        break;
    default:
        echo 'Algun lenguaje';
        break;
}

include 'includes/footer.php';