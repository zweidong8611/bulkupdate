<?php
$fileName = $_FILES['fileToUpload']['name'];
$fileType = $_FILES['fileToUpload']['type'];
//$fileContent = file_get_contents($_FILES['fileToUpload']['tmp_name']);
$dataUrl = 'data:' . $fileType . ';base64,' . base64_encode($fileContent);

$json = json_encode(array(
  'name' => $fileName,
  'type' => $fileType,
  'dataUrl' => $dataUrl,
  'username' => $_REQUEST['username'],
  'accountnum' => $_REQUEST['accountnum']
));

$uploaddir = $_SERVER['DOCUMENT_ROOT']."/zz/upload/";

//system("rm /var/www/html/zz/upload/cpiii.csv");
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],$uploaddir."myupload.csv");

//echo $json;
?>