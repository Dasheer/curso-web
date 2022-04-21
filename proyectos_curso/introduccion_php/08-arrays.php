<?php include 'includes/header.php';

$carrito = ['Tablet', 'Televisión', 'Computadora'];

// acceder a un elemento del array
echo $carrito[1];

// añade un elemento al indice 3 del arreglo
$carrito[3] = "Nuevo Producto...";

// añadir un elemento al final del array
array_push($carrito, 'Audífonos');

// añadir al inicio
array_unshift($carrito, 'SmartWatch');

// Util para ver los contenidos de un array
echo '<pre>';
var_dump($carrito);
echo '<pre>';

$clientes = array('Cliente 1', 'Cliente 2', 'Cliente 3');
echo '<pre>';
var_dump($clientes);
echo '<pre>';

include 'includes/footer.php';