<?php
    include('connect.php');
    
    $goodsid = $_GET["goodsid"];


    $sql="select * from goods1 where goodsid='".$goodsid."'";

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


