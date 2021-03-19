<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","angPhp");
  return $con;
}
?>