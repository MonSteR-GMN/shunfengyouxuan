<?php
    include 'connect.php';
    //1.拿到前端传输过来的uname、upwd
    $uname = isset($_POST["uname"])? $_POST["uname"] : "";
    $upwd = isset($_POST["upwd"])? $_POST["upwd"] : "";
    
    //2.插入数据库
    //(1)执行sql语句
    $res = $conn->query("insert into usertable (uname,upwd) values ('".$uname."','".$upwd."')");
    
    if($res){
        echo "登录成功";
    }
    $conn->close();
?>