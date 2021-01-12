<?php
    @include_once("conn.php");

    $phone = $_GET["phone"]; 
    if(!$phone){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `userinfo` where phone = '$phone'";

    $result =  mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);

    $obj = array();

    if(!$item){
        $obj["status"] = true;
        $obj["msg"] = "可以使用的手机号";
    }else{
        $obj["status"] = false;
        $obj["msg"] = "手机号已注册";
    }

    echo json_encode($obj);


?>