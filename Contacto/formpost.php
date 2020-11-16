<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Contacto/css/estilos.css">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre = $_REQUEST["nombre"];
    $telefono = $_REQUEST["telefono"];
    $descripcion = $_REQUEST["descripcion"];
    $fecha = $_REQUEST["fecha"];

    $fecha = date ("d/m/Y");

    fwrite($nombre, $telefono, $descripcion, $fecha);
    
    
</body>
</html>