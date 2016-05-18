<?php

    /*    "register.php"
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

    if($passd == $passd2){
        $db->exec("INSERT INTO usrs VALUES (null, 'noName', 0, '". $useremail ."', 'heart', '". md5($passd) ."', 'graphData:0X0Y')");

        $results = $db->query('SELECT * FROM usrs WHERE email = "'.$useremail.'" and pass = "'. md5($passd) .'"');

        while ($row = $results->fetchArray()) {
            $usrData = $row;
            $foundRow = 1;
        }

        if($foundRow == 1) {
            if(!isset($_COOKIE['usrID'])) {
                setcookie('usrID', $usrData[0], time()+3600);
                $_COOKIE['usrID'] = $usrData[0];
            }

            if(!isset($_COOKIE['usrAge'])) {
                setcookie('usrAge', $usrData[2], time()+3600);
                $_COOKIE['usrAge'] = $usrData[2];
            }

            if(!isset($_COOKIE['usrEmail'])) {
                setcookie('usrEmail', $usrData[3], time()+3600);
                $_COOKIE['usrEmail'] = $usrData[3];
            }

            if(!isset($_COOKIE['usrGraphPos'])) {
                setcookie('usrGraphPos', $usrData[6], time()+3600);
                $_COOKIE['usrGraphPos'] = $usrData[6];
            }

            if(!isset($_COOKIE['usrDP'])) {
                setcookie('usrDP', $usrData[4], time()+3600);
                $_COOKIE['usrSP'] = $usrData[4];
            }
        }

        echo "success\n";
    } else {
        echo "false\n";
    }

?>
