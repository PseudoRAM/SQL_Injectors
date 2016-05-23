<?php

    /*    "login.php"
     *    Stroke Help
     *
     *    USYD INFO1003
     *    16/5/2016
     *
     *    By: Benjamin Jelavic
     *
     *    Tutor: Dr Wai Ho Wong
     *
     *    Distrabution License: GNU GPLv3
     */

    class MyDB extends SQLite3 {
        function __construct() {
            $this->open('../data/userBase.db');
        }
    }

    $db = new MyDB();
    $str = $_SERVER['QUERY_STRING'];
    parse_str($str);

    $foundRow = 0;
    $usrData = array();
    $results = $db->query('SELECT * FROM usrs WHERE email = "'.$username.'" and pass = "'. md5($passd) .'"');

    while ($row = $results->fetchArray()) {
        $usrData = $row;
        $foundRow = 1;
    }

    if($foundRow == 1) {
        echo "usrID=". $usrData[0]."; path=/\nusrAge=". $usrData[2]."; path=/\nusrEmail=". $usrData[3]."; path=/\nusrGraphPos=". $usrData[6]."; path=/\nusrSP=". $usrData[4]."; path=/\n";
    } else {
        echo "false\n";
    }
?>
