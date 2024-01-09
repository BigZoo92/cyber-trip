<?php
include '../db.php';

$name = $_POST['name'];
$sql = "INSERT INTO names (name) VALUES ('$name')";



try {
    $conn->exec($sql);
    echo "insert name successfully";
} catch (PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}


$conn = null;
