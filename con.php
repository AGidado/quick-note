<?php
$server_name = "localhost";
$user_name = "root";
$password = 12345;



$con = new mysqli($server_name, $user_name, $password);


if($con->connect_error)
{
    die("Something went wrong");
}

else{
   /// echo "connected";
}