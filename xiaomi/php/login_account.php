<?php
    @include_once("conn.php");



    // 假如此处是前端传入的  用户名和密码

    $account = $_POST["account"];  // 用户名 || 手机号 || 邮箱
    $pwd = $_POST["pwd"];

    

    if(!($account&&$pwd)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }


    // 1.  根据前端传入的用户名 查找是否存在该用户
    // 存在 => 验证密码
    // 不存在 => 用户不存在

    // 2. 验证密码
    // 用户输入的密码  和 数据库中查找到的密码

    $search = "select * from `miuserinfo` where phone='$account'";

    $result = mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);  //解析成功 => 关联数组  失败(没有数据)=>false
    // print_r($item);

    $obj = array();
    if($item){
        $realPwd = $item["pwd"];  
        if($pwd==$realPwd){
            $obj["status"] = true;    
            $obj["msg"] = "登录成功";   
            $obj["user"] = $item["phone"];   //因为是多账号登录,为了标识用户身份,传递用户名  
        }else{
            $obj["status"] = false;    
            $obj["msg"] = "用户名或密码有误";
        }
    }else{
        $obj["status"] = false;    
        $obj["msg"] = "该用户未注册";   
    }

    echo json_encode($obj);



?>