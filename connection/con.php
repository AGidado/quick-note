<?php
$server_name = "localhost";
$user_name = "root";
$password = 12345;
$dbname = "quick-note";


$con = new mysqli($server_name, $user_name, $password, $dbname);

//var_dump($con);
if($con->connect_error)
{
    die("Something went wrong");
}

else{
   //echo "connected";
}