<?php
    @include_once("conn.php");

    // $search = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade` where name like '%张%' order by id asc limit 0,20";
    $search = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade`";

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