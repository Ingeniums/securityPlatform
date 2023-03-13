<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" integrity="TkZaR0szQzdPQlJHRTZLN01WUkdFWjI3TU5WSEM9PT0=">
    <title>Includer</title>
</head>
<body>
    <a href="upload.php">Upload an image, ONLY AN IMAGE!</a>
    <br />
    <?php
        if (!is_dir("./uploads"))
          mkdir("./uploads", 0777, true);
        $files = array_diff(scandir("./uploads"), array(".", ".."));
        foreach ($files as $file) {
            echo "<a href=\"uploads/" . $file . "\">" . $file ."</a>";
            echo "<br />";
        }
    ?>
</body>
</html>
