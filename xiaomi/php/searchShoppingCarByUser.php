<?php

    @include_once("conn.php");

    $phone = $_POST["phone"];

    $search ="select s.id,s.userphone,s.gid,s.buyNum,s.buyColor,s.buyPrice,s.buyEdition,g.goodsName,g.bigPicList from `mishoppingcar` as s,`migoodslist` as g where s.gid = g.goodsId and userphone = '$phone'";
    // echo $search;

    $result = mysqli_query($conn,$search);

    $all = array();

    while($item = mysqli_fetch_assoc($result)){

        $item["bigPicList"] = explode(",",$item["bigPicList"])[0];
        $item["total"] = round($item["buyNum"]*$item["buyPrice"],2);
        // 后端进行数据预处理
        array_push($all,$item);
    }

    echo json_encode($all);


?>