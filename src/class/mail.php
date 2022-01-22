<?php

$rawdata = file_get_contents("php://input");
// Let's say we got JSON
$objPost = json_decode($rawdata);

//print_r($objBody);
//echo $objPost->body;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: website@cvrivesud.com" . "\r\n" .
//$to = "stagiairetsa@hotmail.com, helena.levesque@cvrivesud.com, isabelle.langlois@gvmi.com";
$to = "isabelle.langlois@vetetnous.com, lordi@msdi.ca";

$retour = mail($to, $objPost->subject, $objPost->body, $headers);

header('Content-Type: application/json; charset=utf-8');
if ($retour) {
        echo '{"status"="OK"}';
}else {
      echo '{"status"="Erreur"}';
}



?>
