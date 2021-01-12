<?php
    @header("Content-Type:text/html;charset=utf-8");   // 适配低版本
	
	// 配置CORS(跨域资源共享)
	@header("Access-Control-Allow-Origin:*"); //允许所有的源访问
	
	// @header("Access-Control-Allow-Origin:http://127.0.0.1:5500"); //允许所有的源访问

    const host = "b-iaphpbldp6iofq.bch.rds.gz.baidubce.com:3306";
    const user = "b_iaphpbldp6iofq";
    const pwd = "12345678";
    const dbName = "b_iaphpbldp6iofq";
    
    // 将 1,2 合并成一步   链接成功=> 返回链接的对象  链接失败 返回false;
    $conn = mysqli_connect(host,user,pwd,dbName); 

    if(!$conn){
        exit("数据库链接失败!");
    }

    // echo $_SERVER["REMOTE_ADDR"];
//     if($_SERVER["REMOTE_ADDR"]!="::1" && $_SERVER["REMOTE_ADDR"]!="192.168.60.89"){
//         exit("你在干什么!!!");
//     }
// 
    // 适配低版本  设置编码格式(中文可能会乱码) 
    mysqli_query($conn,"set name set utf-8");  //从数据库取数据时  将编码转为utf-8; 
    mysqli_query($conn,"set character set utf8");  //向数据库存数据时  将编码转为utf-8; 


?>