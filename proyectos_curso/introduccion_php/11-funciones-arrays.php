<?php include 'includes/header.php';

$carrito = ['Tablet', 'Computadora', 'Televisión'];

var_dump(in_array('Tablet', $carrito));
var_dump(in_array('Audifonos', $carrito));

// ordenar elementos de un arreglo
$numero = array(1,3,4,7,5,2,8);
sort($numero); // de menor a mayor
rsort($numero); // de mayor a menor

echo '<pre>';
var_dump($numero);
echo '<pre>';

// ordear arreglo asociativo
$cliente = array(
    'saldo' => 200,
    'tipo' => 'Premium',
    'nombre' => 'Daniel'
);

asort($cliente); // ordena por valores (orden alfabetico)
arsort($cliente); // ordena por valores (orden descendente)
ksort($cliente); // ordena por llaves (orden alfabetico)
krsort($cliente); // ordena por llaves (orden descendente)

echo '<pre>';
var_dump($cliente);
echo '<pre>';

include 'includes/footer.php';