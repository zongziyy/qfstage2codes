<?php

    @include_once("conn.php");

    $ids = $_POST["ids"]; //  接收一个字符串 (一个或多个id 用逗号分隔)  2,3,5
    
    if(!$ids){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $del = "delete from `mishoppingcar` where id in ($ids)";

    mysqli_query($conn,$del);

    $row = mysqli_affected_rows($conn);

    $obj = array();
    if($row>0){
        $obj["status"] = true;
        $obj["msg"] = "删除成功";
    }else if($row == 0){
        $obj["status"] = false;
        $obj["msg"] = "该数据不存在,或已被删除";
    }else{
        $obj["status"] = false;
        $obj["msg"] = "删除失败,语法错误";
        $obj["sql"] = $del;
    }

    echo json_encode($obj);

?>