<?php
    include('connect.php');

    @$goodsid = $_GET["goodsid"];
    @$uname = $_GET["uname"];

    $sql="select * from shoppingcarts where uname='".$uname."' and cartid='".$goodsid."'";
    
    $res = $conn->query($sql);
    
    $row = $res->fetch_all(MYSQLI_ASSOC);

    $num = $res->num_rows;
    
    if($num){
        $gg = $row[0]["qty"] + 1;
        $res2 = $conn->query("update shoppingcarts set qty='".$gg."' where uname='".$uname."' and cartid='".$goodsid."'");
    }
    // echo $gg;
    $sql3="select * from shoppingcarts where cartid='".$goodsid."'";
    $res3 = $conn->query($sql3);
    
    $row3 = $res3->fetch_all(MYSQLI_ASSOC);

    $resjia = json_encode($row3,JSON_UNESCAPED_UNICODE);

    echo $resjia;



    // $res->close();
    // $conn->close();
?>


