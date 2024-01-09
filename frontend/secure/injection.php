<?php
include '../db.php';

$name = $_POST['name'];
$sql = "INSERT INTO names (name) VALUES (:name)";

try {
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->execute();
    echo "Name inserted successfully";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;
