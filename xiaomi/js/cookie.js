
function setCookie(key, val, day, path = "/") {
    if (day) {
        var date = new Date();
        date.setDate(date.getDate() + day);

        document.cookie = key + "=" + val + ";expires=" + date.toUTCString() + ";path=" + path;
    } else {
        document.cookie = key + "=" + val + ";path=" + path;
    }

}

function getCookie(key) {
    var cookie = document.cookie;
    if (cookie) {
        var dataList = cookie.split("; ");
        // console.log(dataList);
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i];  //"user=a123123", "pwd=123123", "phone=17386141516", "email=123@qq.com"
            var attr = item.split("=")[0];  // "user"  "pwd"
            var val = item.split("=")[1];  // "a123123" "123123"

            if (key === attr) {
                return val;
            }
        }

    }
    return "";
}


function delCookie(key) {
    setCookie(key, "", -1);
}