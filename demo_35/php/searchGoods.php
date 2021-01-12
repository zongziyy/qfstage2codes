<?php
    @include_once("conn.php");

    @header("Content-Type:text/json;charset=utf-8");   // 适配低版本

    $search = "select id,goodsId,goodsName,goodsPrice,bigPicList from `goodslist` limit 0,20";

    $result =  mysqli_query($conn,$search);

    $all = array();
    while($item = mysqli_fetch_assoc($result)){

        // $item["smallPicList"] = explode(",",$item["smallPicList"]);
        $item["bigPicList"] = explode(",",$item["bigPicList"]);

        array_push($all,$item);
    }

    echo json_encode($all);

?>