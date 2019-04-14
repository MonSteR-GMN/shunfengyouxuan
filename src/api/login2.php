<?php
    include('connect.php');
    //登录
    
    $uname = isset($_POST["uname"])? $_POST["uname"] : "";
    
    // var_dump($uname);

    $upwd = isset($_POST["upwd"])? $_POST["upwd"] : "";

    $sql="select * from usertable where uname='".$uname."' and upwd='".$upwd."'";

    $res = $conn->query($sql);

    $num = $res->num_rows;
    // var_dump($num);
    if($num == 1){
        echo 1;
    }else{
        echo 0;
    }

    // $res->close();
    // $conn->close();
?>


