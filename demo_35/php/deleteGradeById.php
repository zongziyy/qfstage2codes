<?php
    @include_once("conn.php");

    $id = $_GET["id"];

    if(!$id){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $del = "delete from `grade` where id = $id"; 

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
        $obj["msg"] = "删除失败";
        $obj["sql"] = $del;
    }

    echo json_encode($obj);


?>