<?php
    include 'connect.php';

    $sql1 = 'select * from goods1 where goodsid between 1 and 8';
    $sql2 = 'select * from goods1 where goodsid = 9';
    $sql4 = 'select * from goods1 where goodsid between 10 and 17';
    $sql5 = 'select * from goods1 where goodsid between 18 and 25';
    $sql6 = 'select * from goods1 where goodsid between 26 and 33';
    $sql7 = 'select * from goods1 where goodsid between 34 and 41';
    
    $sql8 = 'select * from goods1 where goodsid between 42 and 49';
    $sql9 = 'select * from goods1 where goodsid between 50 and 57';
    $sql10 = 'select * from goods1 where goodsid between 58 and 64';
    $sql11 = 'select * from goods1 where goodsid between 65 and 89';
    $sql12 = 'select * from goods1 where goodsid between 90 and 97';
    $sqlall = 'select * from goods1 where goodsid between 1 and 97';

    $res1 = $conn->query($sql1);
    $res2 = $conn->query($sql2);
    $res4 = $conn->query($sql4);
    $res5 = $conn->query($sql5);
    $res6 = $conn->query($sql6);
    $res7 = $conn->query($sql7);
    $res8 = $conn->query($sql8);
    $res9 = $conn->query($sql9);
    $res10 = $conn->query($sql10);
    $res11 = $conn->query($sql11);
    $res12 = $conn->query($sql12);
    $resall = $conn->query($sqlall);


    $data1 = $res1->fetch_all(MYSQLI_ASSOC);
    $data2 = $res2->fetch_all(MYSQLI_ASSOC);
    $data4 = $res4->fetch_all(MYSQLI_ASSOC);
    $data5 = $res5->fetch_all(MYSQLI_ASSOC);
    $data6 = $res6->fetch_all(MYSQLI_ASSOC);
    $data7 = $res7->fetch_all(MYSQLI_ASSOC);
    $data8 = $res8->fetch_all(MYSQLI_ASSOC);
    $data9 = $res9->fetch_all(MYSQLI_ASSOC);
    $data10 = $res10->fetch_all(MYSQLI_ASSOC);
    $data11 = $res11->fetch_all(MYSQLI_ASSOC);
    $data12 = $res12->fetch_all(MYSQLI_ASSOC);
    $dataall = $resall->fetch_all(MYSQLI_ASSOC);


    $data = array(
        "data1" => $data1,
        "data2" => $data2,
        "data4" => $data4,
        "data5" => $data5,
        "data6" => $data6,
        "data7" => $data7,
        "data8" => $data8,
        "data9" => $data9,
        "data10" => $data10,
        "data11" => $data11,
        "data12" => $data12,
        "dataall" => $dataall
    );
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    // $res1->close();
    // $res2->close();
    // $res4->close();
    // $res5->close();
    // $res6->close();
    // $res7->close();
    // $res8->close();
    // $res9->close();
    // $res10->close();
    // $res11->close();
    // $res12->close();
    $conn->close();
?>