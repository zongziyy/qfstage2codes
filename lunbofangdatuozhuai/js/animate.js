function animate(ele, attr, end, aniType, delay, fn) {

    // var cur = ele.offsetLeft;   //  点击时盒子的当前值 (初始的位置)
    var cur = parseFloat(getStyle(ele, attr)); //  点击时盒子的当前值 (初始的位置)
    // var end = 1000;

    end = parseFloat(end);

    var speed = 0;

    clearInterval(ele.timer); // 下一次启动前清除上一个

    // 将每一个计时器的编号  存到该元素(对象)上
    ele.timer = setInterval(function () {
        isMove = true;
        // if (end > cur) {
        //     // 正向运动  (0-1000)  终点值 > 起点值
        //     cur += speed;
        // } else {
        //     // 反向运动  (1000-0)   终点值 < 起点值
        //     cur -= speed;
        // }
        // console.log(aniType);
        if (aniType == "linear") {
            // 匀速运动 
            speed = end > cur ? 10 : -10;

        } else if (aniType == "ease-in") {
            // 加速运动     v = v0 + at;
            // speed += 5;   //正向运动   每隔一段时间 速度加5
            // speed -= 5;   //正向运动   每隔一段时间 速度减5

            // speed = end > cur ? speed + 5 : speed - 5;
            end > cur ? speed += 8 : speed -= 8;
        } else if (aniType == "ease-out") {
            // console.log(speed);

            // 缓冲运动    (终点值-当前值)/缓冲因子  => 每次走剩余的  1/n
            // 缓冲因子  一般在8-12之间

            // 正向运动   
            // var speed = (end - cur) / 2;  // => 正值
            // speed = Math.ceil(speed);   //如果speed <1  向上取整 => 1
            // console.log(speed);

            // 反向运动 
            // var speed = (end - cur) / 2;  //负值  => -0.75
            // speed = Math.floor(speed);   //如果speed > -1  向下取整 => -*-1
            // console.log(speed);

            speed = (end - cur) / 10;
            speed = end > cur ? Math.ceil(speed) : Math.floor(speed);
        }

        cur += speed;

        // console.log(speed);

        ele.style[attr] = cur + "px";

        if (Math.abs(end - cur) < Math.abs(speed)) { // 临界值的判断  (理想条件  cur==end) => 误差允许范围(speed)
            ele.style[attr] = end + "px";
            clearInterval(ele.timer);

            // 运动结束之后  如果存在函数fn  就调用
            if (fn) {
                fn();
            }
            isMove = false;
        }
    }, delay == undefined ? 10 : delay);

}

function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}