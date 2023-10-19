<?php

    $server = "localhost";
    $user = "root";
    $password = "";
    $badeDatos = "cetis107";

    //conexion
    $conexion = new mysqli($server, $user, $password, $badeDatos);

    //Revisar conexion
    if($conexion->connect_error){
        die("Falló la conexion" . $conexion->connect_error);
    }

?>