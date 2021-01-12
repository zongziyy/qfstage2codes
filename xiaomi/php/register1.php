<?php
    @include_once("conn.php");

    
    
    $insert = "insert into `userinfo`(user,pwd,phone,email) value('a123123','123123','17386141517','1272071495@qq.com')"; 

    $res = mysqli_query($conn,$insert);   //true(语句执行成功)   false(语句执行失败, 1 语法有误 2.唯一索引重复)

    $row = mysqli_affected_rows($conn);

    $obj = array();
    if($row>0){
        $obj["status"] = true;    
        $obj["msg"] = "注册成功";    
    }else{
        $obj["status"] = false;    
        $obj["msg"] = "注册失败";   
    }

    echo json_encode($obj);
    





?>