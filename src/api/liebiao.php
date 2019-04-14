<?php
    include 'connect.php';
    
    $page = isset($_GET["currentPage"])? $_GET["currentPage"] : "";
    $qty = isset($_GET["qty"])? $_GET["qty"] : "";

    // $page = 4;
    // $qty = 1;
    $sql = 'select * from liebiao';
    $res = $conn->query($sql);
    // var_dump($res);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);

    $resArr = array_slice($row,($page-1)*$qty,$qty);

    // var_dump($resArr);
    $data = array(
        "resArr" => $resArr,
        "len" => count($row),
        "page" => $page * 1,
        "qty" => $qty * 1 
    );
    // var_dump($data);
    // echo $page;
    $data = json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $data;
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // 页码  数量    索引
    // 1      8      0-7
    // 2      8      8-15


?>