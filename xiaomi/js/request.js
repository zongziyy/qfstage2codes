// ajax二次封装
function request(url, params, type = "get") { // 发送ajax请求 返回Promise实例  通过Promise实例传出请求的结果   
    return new Promise(function(resolve, reject) {
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



// function isExistUser(params) {  // 你给我参数  我帮你判断是否存在
//     return request("../php/isExistUser.php", params, "get");
// }
// function register(params) { // {user, pwd, phone, email}
//     return request("../php/register.php", params, "post");
// }

// function login(params) { //  { account, pwd: pwd }
//     return request("../php/login_account.php", params, "post");
// }

const isExistPhone = params => request("../php/isExistPhone.php", params);
const register = params => request("../php/register.php", params, "post");
const login = params => request("../php/login_account.php", params, "post");

const searchGoodsOrder = params => request("../php/searchGoodsOrder.php", params);


//goodsDitail
const searchGoodsByGoodsId = params => request("../php/searchGoodsByGoodsId.php", params);
const addToShoppingCar = params => request("../php/addToShoppingCar.php", params, "post");

// shoppingCar
const searchShoppingCarByUser = params => request("../php/searchShoppingCarByUser.php", params, "post");
const deleteShoppingCarById = params => request("../php/deleteShoppingCarById.php", params, "post");

const changeBuyNumByGoodsId = params => request("../php/changeBuyNumByGoodsId.php", params, "post")