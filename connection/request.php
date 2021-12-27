<?php 
include ('con.php');

// $data = $_POST['note'];

// $json_data = file_get_contents('note');


// $data = json_decode($json_data);

// var_dump($json_data);



// Get the JSON contents
// $json = file_get_contents('php://input');

// echo $json;

// decode the json data
//$data = json_decode($json);


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

function requestJson(){
    $json = file_get_contents('php://input');
    echo $json;
}
