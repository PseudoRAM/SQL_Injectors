<?php
    $dbconn = pg_connect("host=mysql.hostinger.in port=3306 dbname=u929392591_SQL_I user=u929392591_injec password=SQLINJECTORS2K16");
    $str = $_SERVER['QUERY_STRING'];
    parse_str($str);

    $result = pg_query_params($dbconn, 'SELECT * FROM users WHERE username = $1 and passwd = $2', array("$username", "$passd"));

    if (pg_fetch_row($result)) {
        echo "success\n";
    } else {
        echo "invalid\n";
    }
?>
