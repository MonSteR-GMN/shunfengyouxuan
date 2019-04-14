<?php
    include('connect.php');

    @$goodsid = $_GET["goodsid"];
    @$uname = $_GET["uname"];

    $sql="select * from shoppingcarts where uname='".$uname."' and cartid='".$goodsid."'";

    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);

    $num = $res->num_rows;
    
    if($num){
        $gg = $row[0]["qty"] - 1;
        // echo $gg;
        $res2 = $conn->query("update shoppingcarts set qty='".$gg."' where uname='".$uname."' and cartid='".$goodsid."'");
    }
    
  
    // $res->close();
    // $conn->close();
?>


