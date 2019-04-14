<?php
    include('connect.php');

    @$goodsid = $_GET["goodsid"];
    @$uname = $_GET["uname"];

    $sql="delete from shoppingcarts where uname='".$uname."' and cartid='".$goodsid."'";
    $res3 = $conn->query($sql);
    
    // $row = $res->fetch_all(MYSQLI_ASSOC);

    // $num = $res->num_rows;
    // var_dump($num);
    // if($num){
        // $res2 = $conn->query("delete from shoppingcarts where uname='".$uname."' and cartid='".$goodsid."'");
    // }
    // $res->close();
    // $conn->close();
?>


    