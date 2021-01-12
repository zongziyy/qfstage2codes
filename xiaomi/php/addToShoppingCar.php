<?php
    @include_once("conn.php");


    $phone = $_POST["phone"];
    $gid = $_POST["gid"];
    $buyNum = $_POST["buyNum"];
    $buyEdition = $_POST["buyEdition"];
    $buyPrice = $_POST["buyPrice"];
    $buyColor = $_POST["buyColor"];

    if(!($phone&&$gid&&$buyNum&&$buyEdition&&$buyPrice&&$buyColor)){
        $obj = array();
        $obj["status"] = false;    
        $obj["msg"] = "请输入完整内容";   
        exit(json_encode($obj));
    }

    $search = "select * from `mishoppingcar` where userphone ='$phone' and gid ='$gid' and buyEdition='$buyEdition' and buyColor = '$buyColor'";

    $result = mysqli_query($conn,$search);

    $item = mysqli_fetch_assoc($result);

    if($item){
        $sql = "update `mishoppingcar` set buyNum = buyNum + $buyNum where userphone ='$phone' and gid='$gid'";
        mysqli_query($conn,$sql);

    }else{
        $sql = "insert into `mishoppingcar`(userphone,gid,buyNum,buyEdition,buyPrice,buyColor) values('$phone','$gid',$buyNum,'$buyEdition','$buyPrice','$buyColor')";
        
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