<?php
    @include_once("conn.php");

    $email = $_GET["email"]; 
    if(!$email){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `userinfo` where email = '$email'";

    $result =  mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);

    $obj = array();

    if(!$item){
        $obj["status"] = true;
        $obj["msg"] = "可以使用的邮箱";
    }else{
        $obj["status"] = false;
        $obj["msg"] = "邮箱已注册";
    }

    echo json_encode($obj);


?>