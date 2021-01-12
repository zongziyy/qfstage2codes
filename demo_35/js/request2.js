
function request(url, params, type = "get") {  // 发送ajax请求 返回Promise实例  通过Promise实例传出请求的结果
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: type,
            url: url,
            data: {
                ...params,
            },
            dataType: "json",
            success(result) {
                resolve(result); // 统一将接口结果返回出去
            }
        })
    })
}


function isExistUser(params) {  // 你给我参数  我帮你判断是否存在
    return request("../php/isExistUser.php", params, "get");
    // return new Promise(function (resolve, reject) {
    //     $.ajax({
    //         type: "get",
    //         url: "../php/isExistUser.php",
    //         data: {
    //             ...params,
    //         },
    //         dataType: "json",
    //         success(result) {
    //             resolve(result); // 统一将接口结果返回出去
    //         }
    //     })
    // })
}
function register(params) { // {user, pwd, phone, email}
    return request("../php/register.php", params, "post");
    // return new Promise(function (resolve, reject) {
    //     $.ajax({
    //         type: "post",
    //         url: "../php/register.php",
    //         data: { ...params },  // user, pwd, phone, email
    //         dataType: "json",
    //         success(result) {
    //             resolve(result);
    //         }
    //     })

    // })
}

function login(params) { //  { account, pwd: pwd }
    return request("../php/login_account.php", params, "post");
    // return new Promise(function (resolve, reject) {
    //     $.ajax({
    //         type: "post",
    //         url: "../php/login_account.php",
    //         data: { ...params },
    //         dataType: "json",
    //         success(result) {
    //             resolve(result);
    //         }
    //     })
    // })
}


