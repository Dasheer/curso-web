<?php include 'includes/header.php';

// while
$i = 100;
while ($i < 10) {
    echo $i . '<br>';

    $i++;
}

// Do While
$i = 100;
do {
    echo $i . '<br>';
    $i++;
} while ($i < 10);

/**
 * 3 imprimir Fizz
 * 5 imprimir Buzz
 * 3 y 5 imprimir Fizz Buzz
 **/

// For Loop
//for ($i = 1; $i < 1000; $i++) {
//    if ($i%3===0 && $i%5===0) {
//        echo $i . ' - FIZZ BUZZ <br>';
//    } else if ($i%3===0) {
//        echo $i . ' - Fizz <br>';
//    } else if ($i%5===0) {
//        echo $i . ' - Buzz <br>';
//    }
//}

// For Each
$clientes = array('Pedro', 'Juan', 'Karen');

foreach ($clientes as $cliente) {
    echo $cliente . '<br>';
}

$cliente = [
  'nombre' => 'Daniel',
  'saldo' => 200,
  'tipo' => 'Premium'
];

foreach ($cliente as $key => $valor) {
    echo $key . ' - ' . $valor . '<br>';
}

include 'includes/footer.php';