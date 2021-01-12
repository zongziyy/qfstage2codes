<?php
    @include_once("conn.php");

    $key = $_GET["key"]; // 接收前端传入的字段key   搜索的关键词
    // column  row
    $orderCol = $_GET["orderCol"]; // 接收前端传入的字段orderCol   排序的列名(id,chinese,math)
    $orderType = $_GET["orderType"];// 接收前端传入的字段orderType   排序的方式(asc desc)

    if(!($orderCol&&$orderType)){
        $obj = array();
        $obj["status"] = false;  
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade` where name like '%$key%' order by $orderCol $orderType";

    $result = mysqli_query($conn,$search);

    $all = array();

    while($item = mysqli_fetch_assoc($result)){
        // 后端进行数据预处理
        $item["chinese"] = $item["chinese"]*1; 
        $item["math"] = $item["math"]*1; 
        $item["english"] = $item["english"]*1; 
        $item["total"] = $item["total"]*1; 

        array_push($all,$item);
    }

    echo json_encode($all);

?>