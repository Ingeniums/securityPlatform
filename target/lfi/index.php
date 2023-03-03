<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>the includer</title>
</head>
<body>
    <a href="upload.php">Upload a file</a>
    <br />
    <?php
        $files = array_diff(scandir("./uploads"), array(".", ".."));
        foreach ($files as $file) {
            echo "<a href=\"uploads/" . $file . "\">" . $file ."</a>";
            echo "<br />";
        }
    ?>
</body>
</html>