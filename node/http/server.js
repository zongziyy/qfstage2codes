

let http = require("http");  // 起一个服务

// console.log(http);

// 启动一个服务  
var server = http.createServer(function (req, res) {   // 每次前端请求时 会执行此回调函数
    // req  请求相关的信息
    // res  响应相关的信息

    if (req.url != "/favicon.ico") {
        res.writeHeader(200, {
            "content-Type": "text/html;charset=utf-8"
        });
        if (req.url == "/") {
            console.log(req.url);
            res.write("<h2>你好</h2>");
        } else if (req.url == "/login") {
            console.log(req.url);
            res.write("<h2>登录</h2>");
        } else if (req.url == "/shop") {
            console.log(req.url);
            res.write("<h2>购物车</h2>");
        }
    }

    res.end();  //结束响应 返回一段文本

});

server.listen(3000, function () {   // 服务启动之后执行的回调函数
    console.log("启动成功!");
})


