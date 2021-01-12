
function isExistUser(params) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "../php/isExistUser.php",
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
function register(params) { // {user, pwd, phone, email}
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "post",
            url: "../php/register.php",
            data: { ...params },  // user, pwd, phone, email
            dataType: "json",
            success(result) {
                resolve(result);
            }
        })

    })
}

function login(params) { //  { account, pwd: pwd }
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "post",
            url: "../php/login_account.php",
            data: { ...params },
            dataType: "json",
            success(result) {
                resolve(result);
            }
        })
    })
}


function fn() {
    return new Promise(function (resolve, reject) { })

}