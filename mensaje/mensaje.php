<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        exit;

    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $name = $params->name;
        $lastname = $params->lastname;
        $email = $params->email;
        $tel = $params->tel;
        $message = $params->message;

        $recipient = 'cotiza@tensairetail.cl';
        $subject = 'Cotizacion Tensai ';
        $mj = "$message"."....Numero: "."$tel";
        $headers = "From: $name $lastname<$email> ";

        mail($recipient, $subject, $mj, $headers);
        echo true;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        
        exit;
}
?>
