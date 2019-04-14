<?php
    include('connect.php');
    
    // $goodsid = isset($_GET["goodsid"])? $_GET["goodsid"] : "";
    $uname = isset($_GET["uname"])? $_GET["uname"] : "";


    $sql="select * from shoppingcarts where uname='".$uname."'";

    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row, JSON_UNESCAPED_UNICODE);
    // $num = $res->num_rows;

    // if($num == 1){
    //     echo 1;
    // }else{
    //     echo 0;
    // }

    // $res->close();
    // $conn->close();
?>


