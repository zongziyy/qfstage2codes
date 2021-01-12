var $ = {
    ajax: function (options) {
        var { type = "get", url, data = "", async = true, dataType = "text", success } = options;

        var xhr = new XMLHttpRequest();

        // 如果data传对象 先改为成参数数据队列  在拼接  
        if (typeof data == "object") {    //此方式 不准确(后面会补充)
            var str = "";
            for (var key in data) {
                // console.log(key, data[key]);  // 键名  键值
                str += key + "=" + data[key] + "&";
            }
            data = str.substring(0, str.length - 1);
            console.log(data);
        }

        if (type == "get") {

            if (data) {
                xhr.open("get", url + "?" + data, async);
            } else {
                xhr.open("get", url, async);
            }
            xhr.send();

        } else if (type == "post") {

            xhr.open("post", url, async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);

        }



        xhr.onreadystatechange = function () {
            // 2  3  4
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;

                if (dataType == "json") {
                    result = JSON.parse(result);
                }

                // 请求成功时 如果存在回调函数 则执行回调函数
                if (success) {
                    success(result);
                }

            }

        }

    }

}