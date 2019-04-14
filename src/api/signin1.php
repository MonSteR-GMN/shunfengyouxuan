<?php
    include 'connect.php';
    $uname = isset($_GET["uname"])?$_GET["uname"] : "";//字符串为:"" ; 数字为:0
    // $res = $conn->query($sql);
    // $sql = "select * from usertable where uname='".$uname."'";
    $res = $conn->query("select * from usertable where uname='".$uname."'");
    //* num_rows ：结果集中的数量，用于判断是否查询到结果
    $num = $res->num_rows;
    if($num==0){
        echo true;
    }else{
        echo false;
    }
    //关闭查询结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>