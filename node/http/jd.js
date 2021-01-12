let https = require("https");
// let gunzip = require('zlib').createGunzip();  // 如果线上代码有压缩时需要用到这个第三方模块
let cheerio = require("cheerio");
// let fs = require("fs");
// https://search.jd.com/Search?keyword=%E8%8B%B9%E6%9E%9C&enc=utf-8&suggest=1.def.0.V15--38s0&wq=ping&pvid=6fe0c15b60514f4a8f2b1f5f87b9908d
let req = https.get("https://www.jd.com/", (res) => {
    let html = "";
    res.on("data", (chunk) => { //  监听数据   接收数据之后,拼接起来
        html += chunk;
    });
    res.on("end", function () {  // 监听数据传递结束
        // console.log(html);
        let $ = cheerio.load(html);  // $ 类似 jquery对象

        console.log($(".cate_menu li").length);

        var list = $(".cate_menu li").map(function () {
            var arr = $(this).find("a").map(function () {
                return $(this).text();
            }).get();
            return arr;
        }).get();
        console.log(list);

        // var list = $(".gl-item").slice(0, 5).map(function () {
        //     var goods = {
        //         goodsId: $(this).attr("data-sku"),
        //         goodsName: $(this).find(".p-name").find("em").text(),
        //         goodsImg: $(this).find("img").attr("src"),
        //         goodsPrice: $(this).find(".p-price").find("i").text(),
        //     }
        //     return goods;
        // }).get();
        // console.log(list);

    })

    // var body = "";
    // res.pipe(gunzip);
    // gunzip.on('data', function (data) {
    //     body += data;
    // });

    // gunzip.on('end', function () {
    //     // console.log(body);
    //     var $ = cheerio.load(body);
    //     var goods = {
    //         goodsId: goodsId,
    //         goodsPrice: goodsPrice,
    //         goodsName: $(".sku-name").text().trim(),
    //         goodsPrice: $(".p-price .price").text(),
    //         goodsPicList: $(".lh li img").map((index, item) => $(item).prop("src")).get().join()

    //     }
    //     console.log(goods);

    // });

})
