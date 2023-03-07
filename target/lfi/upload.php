<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Upload a file</title>
</head>
<body>
            <form enctype="multipart/form-data" method="POST" action="upload.php">
                <input type="file" name="file">
                <button type="submit">Upload!</button>
            </form>
        
</body>
</html>

<?php
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $uploads = "./uploads/";
        $filename = $uploads . basename($_FILES["file"]["name"]);
        move_uploaded_file($_FILES["file"]["tmp_name"], $filename);
        echo "file uploaded<br />";
        echo "<a href='index.php'>Go back home</a>";
    }
?>
