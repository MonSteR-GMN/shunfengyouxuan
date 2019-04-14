<?php
    include 'connect.php';

    $sql12 = 'select * from goods1 where goodsid between 90 and 96';

    $res12 = $conn->query($sql12);

    $data12 = $res12->fetch_all(MYSQLI_ASSOC);

    $data = array(
        "data12" => $data12
    );
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
 
    $res12->close();
    $conn->close();
?>