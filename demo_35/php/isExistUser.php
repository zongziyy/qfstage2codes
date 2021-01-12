<?php
    @include_once("conn.php");

    $user = $_GET["user"]; 
    if(!$user){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `userinfo` where user = '$user'";

    $result =  mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);

    $obj = array();

    if(!$item){
        $obj["status"] = true;
        $obj["msg"] = "可以使用的用户名";
    }else{
        $obj["status"] = false;
        $obj["msg"] = "用户名已存在";
    }

    echo json_encode($obj);


?>