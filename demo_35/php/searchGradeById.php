<?php
    @include_once("conn.php");

    // $search = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade` where name like '%张%' order by id asc limit 0,20";

    $id = $_GET["id"];
    
    if(!$id){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select id,name,class,chinese,math,english from `grade` where id = $id";

    $result = mysqli_query($conn,$search);

   

    $item = mysqli_fetch_assoc($result);
    // 后端进行数据预处理
    $item["chinese"] = $item["chinese"]*1; 
    $item["math"] = $item["math"]*1; 
    $item["english"] = $item["english"]*1; 
 
    echo json_encode($item);

?>