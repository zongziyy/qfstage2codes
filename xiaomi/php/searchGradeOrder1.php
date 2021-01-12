<?php
    @include_once("conn.php");

    $key = $_GET["key"]; // 接收前端传入的字段key   搜索的关键词
    // column  row
    $orderCol = $_GET["orderCol"]; // 接收前端传入的字段orderCol   排序的列名(id,chinese,math)
    $orderType = $_GET["orderType"];// 接收前端传入的字段orderType   排序的方式(asc desc)
    $pageIndex = $_GET["pageIndex"];  // 接收前端传入的字段pageIndex  第几页(0-maxPage)
    $showNum = $_GET["showNum"];     // 接收前端传入的字段showNum     每页显示多少条


    if(!($orderCol&&$orderType&&$pageIndex&&$showNum)){
        $obj = array();
        $obj["status"] = false;  
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }   


    // 后端分页    通过sql语句limit m,n  在数据库请求数据是进行分页
    // pageIndex 页码  showNum 每页显示多少条(5)
    // 1     显示    limit 0,5   id顺序[1,5] 
    // 2     显示    limit 5,5   id顺序[6,10] 
    // 3     显示    limit 10,5   id顺序[11,15] 
    // 4     显示    limit 15,5   id顺序[16,20] 

    // pageIndex => limit  (pageIndex-1)*showNum,showNum

    $skipNum = ($pageIndex-1)*$showNum;

    $search = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade` where name like '%$key%' order by $orderCol $orderType limit $skipNum,$showNum";

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