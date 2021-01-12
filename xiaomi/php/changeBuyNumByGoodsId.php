<?php

    @include_once("conn.php");

    $id = $_POST["id"]; //  接收一个字符串 (一个或多个id 用逗号分隔)  2,3,5
    $buyNum = $_POST["buyNum"];
    
    if(!($id&&$buyNum)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $update = "update `mishoppingcar` set buyNum='$buyNum' where id = '$id'";

    mysqli_query($conn,$update);

    $row = mysqli_affected_rows($conn);

    $obj = array();
    if($row>0){
        $obj["status"] = true;
        $obj["msg"] = "更新成功";
        $search = "select buyPrice*buyNum as total from `mishoppingcar` WHERE id=$id";

        $result = mysqli_query($conn,$search);

        $item = mysqli_fetch_assoc($result);
        $obj["total"]=$item["total"];

    }else if($row == 0){
        $obj["status"] = true;
        $obj["msg"] = "更新成功,但是数据未改变";
    }else{
        $obj["status"] = false;
        $obj["msg"] = "更新失败";
        $obj["sql"] = $update;
    }

    echo json_encode($obj);
    
?>