<?php
    @include_once("conn.php");

    $user = $_POST["user"];
    $pwd = $_POST["pwd"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];

    if(!($user&&$pwd&&$phone&&$email)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $insert = "insert into `userinfo`(user,pwd,phone,email) value('$user','$pwd','$phone','$email')"; 

    $res = mysqli_query($conn,$insert);   //true(语句执行成功)   false(语句执行失败, 1 语法有误 2.唯一索引重复)

    $row = mysqli_affected_rows($conn);

    $obj = array();
    if($row>0){
        $obj["status"] = true;    
        $obj["msg"] = "注册成功";    
    }else{
        $obj["status"] = false;    
        $obj["msg"] = "注册失败";   
        $obj["sql"] = $insert;   

    }

    echo json_encode($obj);
    





?>