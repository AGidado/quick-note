<?php

require ('connection/con.php');

if(isset($_REQUEST)) {

  // Takes raw data from the request
  $json = file_get_contents('php://input');

  try
  {
    $data = json_decode($json);

    // insert to database
    $sql = "INSERT INTO note
    (note, colour)
    VALUES ('$data->noteText', '$data->noteColor')";

    if ($con->query($sql) === TRUE) {
      echo json_encode([
        'success' => true,
        'status0 = 200',
        'data' => ['message' => 'Data Saved']
      ]);
      exit(200);
    } else {
      echo "Error: " . $con->error;
    }

}
  catch (Exception $e){
    echo $e;
  }


}



?>