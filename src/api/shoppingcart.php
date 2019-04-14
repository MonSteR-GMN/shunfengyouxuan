<?php
    // include('connect.php');

    // $goodsid = isset($_GET["goodsid"])? $_GET["goodsid"] : "";
    // $uname = isset($_GET["uname"])? $_GET["uname"] : "";

    // var_dump($uname);
    // var_dump($goodsid);



include('connect.php');
    
// error_reporting(0);
    //
    $sql = "select * from shoppingcarts";
    //
    // $uname = 13420128223;
    // $goodsid = 8;
    $goodsid = isset($_GET["goodsid"])? $_GET["goodsid"] : "";
    $uname = isset($_GET["uname"])? $_GET["uname"] : "";
    // var_dump($uname);
    // var_dump($goodsid);
    $sql="select * from shoppingcarts where uname='".$uname."' and cartid='".$goodsid."'";
    // var_dump($goodsid);
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);

    $num = $res->num_rows;
    // var_dump($num);
    $sql="insert into shoppingcarts (cartid,uname) values ('".$goodsid."','".$uname."')";
    // var_dump($row[0]["qty"]);

    // var_dump($row[0]["qty"] += 1);
    if($num){
        $gg = $row[0]["qty"] + 1;
        echo $gg;
        $res2 = $conn->query("update shoppingcarts set qty='".$gg."' where uname='".$uname."' and cartid='".$goodsid."'");
        echo 1;
    }else{
    
        $res2 = $conn->query("INSERT INTO shoppingcarts (cartid,uname,qty) VALUES ('".$goodsid."', '".$uname."', '1')");
        // var_dump($sql);
        echo 0;
    }
    
  
    // $res->close();
    // $conn->close();
?>


