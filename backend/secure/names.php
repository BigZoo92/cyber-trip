<?php
include '../db.php';

$sql = "SELECT * FROM names";

$result = $conn->prepare($sql);
$result->execute();

$names = $result->fetchAll();

echo json_encode($names);


$conn = null;
