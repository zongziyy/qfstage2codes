<?php

    @include_once("conn.php");

    $user = $_POST["user"];

    $search ="select s.id,s.user,s.gid,s.buyNum,g.goodsName,g.goodsPrice,g.bigPicList from `shoppingcar` as  s,goodslist as g where s.gid = g.goodsId and user = '$user'";
    // echo $search;

    $result = mysqli_query($conn,$search);

    $all = array();

    while($item = mysqli_fetch_assoc($result)){

        $item["bigPicList"] = explode(",",$item["bigPicList"])[0];
        $item["goodsPrice"] = round($item["goodsPrice"],2);
        $item["total"] = round($item["buyNum"]*$item["goodsPrice"],2);
        // 后端进行数据预处理
        array_push($all,$item);
    }

    echo json_encode($all);


?>