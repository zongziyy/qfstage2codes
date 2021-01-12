<?php
    @include_once("conn.php");

    $id = $_GET["id"];
    $chinese = $_GET["chinese"];
    $math = $_GET["math"];
    $english = $_GET["english"];

    if(!($id&&$chinese&&$math&&$english)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $update = "update `grade` set chinese='$chinese',math='$math',english='$english' where id = '$id'";

    mysqli_query($conn,$update);

    $row = mysqli_affected_rows($conn);

    $obj = array();
    if($row>0){
        $obj["status"] = true;
        $obj["msg"] = "更新成功";
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