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

    $search = "select * from `goodslist` where goodsId= $gid ";

    $result =  mysqli_query($conn,$search);

  
    $item = mysqli_fetch_assoc($result);

    $item["smallPicList"] = explode(",",$item["smallPicList"]);
    $item["bigPicList"] = explode(",",$item["bigPicList"]);

    

    echo json_encode($item);

?>