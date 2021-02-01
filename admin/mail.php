<?php
header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
}
if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
    header('Access-Control-Allow-Headers: '.$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
}
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json");

$data = [
    'firstName' => $_POST['firstName'],
    'lastName' => $_POST['lastName'],
    'email' => $_POST['email'],
    'phone' => $_POST['phone'],
    'message' => $_POST['message'],
];

$response = [];

foreach ($data as $key => $value) {

        if ($value != ''){
            $value = $value;
        } else if ($value == '') {
            $value = 'EMPTY';
        }

        $response += [$key => $value];  
}

// echo $_SERVER['HTTP_ORIGIN'];

echo json_encode($response);
