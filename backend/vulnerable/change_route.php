<?php
include '../db.php';

$newRoute = $_POST['route'] ?? 'default-route';
$sql = "INSERT INTO routes (id, route) VALUES (1, :newRoute) ON DUPLICATE KEY UPDATE route = :newRoute";

try {
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':newRoute', $newRoute, PDO::PARAM_STR);
    $stmt->execute();
} catch (PDOException $e) {
    echo "Erreur lors du changement de route : " . $e->getMessage();
}

$conn = null;
