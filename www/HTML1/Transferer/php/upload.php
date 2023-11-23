<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Vérifier si le fichier existe déjà
    if (file_exists($targetFile)) {
        echo "Le fichier existe déjà.";
        $uploadOk = 0;
    }

    // Limiter la taille du fichier à 5 Mo
    if ($_FILES["file"]["size"] > 5000000) {
        echo "Le fichier est trop volumineux.";
        $uploadOk = 0;
    }

    // Autoriser seulement certains formats de fichiers
    $allowedFormats = array("jpg", "jpeg", "png", "gif");
    if (!in_array($imageFileType, $allowedFormats)) {
        echo "Seuls les fichiers JPG, JPEG, PNG et GIF sont autorisés.";
        $uploadOk = 0;
    }

    // Vérifier si $uploadOk est à 0 à cause d'une erreur
    if ($uploadOk == 0) {
        echo "Le fichier n'a pas été téléchargé.";
    } else {
        // Télécharger le fichier sur le serveur
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "Le fichier " . htmlspecialchars(basename($_FILES["file"]["name"])) . " a été téléchargé.";
        } else {
            echo "Une erreur s'est produite lors du téléchargement du fichier.";
        }
    }
}
?>
