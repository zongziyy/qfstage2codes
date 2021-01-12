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


    // $pageIndex 范围没有限制(1,maxPage) 可能超出临界值

    // 求出最大页码maxPage   => 满足条件的数据的总数量 / showNum

    // 1. 满足条件的数据的总数
    $searchAll = "select id,name,class,chinese,math,english,chinese+math+english as total from `grade` where name like '%$key%' order by $orderCol $orderType";
    $resultAll = mysqli_query($conn,$searchAll);   // 查询满足条件的数据  =>结果对象

    $count = $resultAll->num_rows; // 结果对象中 num_rows  表示搜索数据的总数
    // print_r($resultAll);

    $maxPage = ceil($count/$showNum);

    // 2. 对页码进行限制
    if($pageIndex<1){
        $pageIndex=1;
    }

    if($pageIndex > $maxPage){
        $pageIndex = $maxPage;
    }


    $skipNum = ($pageIndex-1)*$showNum;

    // 后端分页
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

    // echo json_encode($all);
    
    // 前端需要限制最大页码   maxPage 也要传出去 ?
    // 怎么传 ? 合二为一  放到一个总的对象中
    
    $obj = array();
    $obj["maxPage"] = $maxPage;
    $obj["count"] = $count;
    $obj["list"] = $all;
    
    echo json_encode($obj);

?>