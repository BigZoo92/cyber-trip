<?php
// In your PHP form processing script
session_start();
if ($_POST['csrf_token'] != $_SESSION['csrf_token']) {
    // Handle the error - the request is not legitimate
}
