<?php
    @include_once("conn.php");


    $user = $_POST["user"];
    $gid = $_POST["gid"];
    $buyNum = $_POST["buyNum"];

    if(!($user&&$gid&&$buyNum)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `shoppingcar` where user = '$user' and gid = '$gid'";

    $result = mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);

    // 无脑新增   => 不好(重复购买  添加多条数据)
    // 判断该用户  是否购买该商品  => 在购买之前判断 ?
    // a. 没有买 就新增 
    // b. 买了   就更新  (原本的数量 + 现买的)

    if($item){  // 已经买过了 

        $sql = "update `shoppingcar`  set buyNum = buyNum + $buyNum where user ='$user' and gid='$gid'";
        mysqli_query($conn,$sql);

    }else{  //没有买
        $sql = "insert into `shoppingcar`(user,gid,buyNum) values('$user','$gid',$buyNum)";
        mysqli_query($conn,$sql);
    }   

    $row = mysqli_affected_rows($conn);
    
    $obj = array();
    if($row>0){
        $obj["status"] = true;    
        $obj["msg"] = "加入成功";    
    }else{
        $obj["status"] = false;    
        $obj["msg"] = "加入失败";   
        $obj["sql"] = $sql;   
    }

   
    echo json_encode($obj);




?>