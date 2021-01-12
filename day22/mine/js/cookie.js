setCookies = (key, value, day) => {
    if (!day) {
        document.cookie = `${key}=${value}`;
    } else {
        var date = new Date();
        date.setDate(date.getDate() + day * 1);
        document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
    }
}


getCookies = key => {
    var cookies = document.cookie;
    var cookieList = cookies.split("; ");
    var newList = [];
    cookieList.forEach(item => {
        newList.push(item.split("="));
    });
    var keyValue = new Map(newList);
    if (keyValue.has(key)) {
        return keyValue.get(key);
    } else {
        console.log("不存在此cookie");
    }
}