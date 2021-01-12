<?php
    @include_once("conn.php");

    @header("Content-Type:text/json;charset=utf-8");   // 适配低版本

    $gid = $_GET["gid"];
    if(!$gid){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `migoodslist` where goodsId= $gid ";

    $result =  mysqli_query($conn,$search);

  
    $item = mysqli_fetch_assoc($result);

    $item["bigPicList"] = explode(",",$item["bigPicList"]);
    $item["goodsPrices"] = explode(",",$item["goodsPrices"]);
    $item["colors"] = explode(",",$item["colors"]);
    $item["editions"] = explode(",",$item["editions"]);

    

    echo json_encode($item);

?>