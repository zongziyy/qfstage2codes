function gongzi(){
    var a = document.getElementById("z1").value;
    c = parseInt(a) + 18;
    d = parseInt(a);
    if(isNaN(a) || a < 0 || a == ""){
        alert("请输入正确的工作年限");
    }
    else if(a >= 80){
        alert("就按你18岁开始打工算，你得先活到" + c + "岁");
    }
    else{
        var b = parseInt(10000 * (1 + 0.05 * d));
        document.getElementById("z2").innerHTML = a + "年后工资为：" + b +"元";
    }
}

function tianshu(){
    var t = document.getElementById("a1").value;
    if(t < 0 || t > 720 || isNaN(t)){
        alert("请输入正确的天数");
    }
    else if(t == ""){
        alert("请输入");
    }
    else if(t >= 0 & t < 24){
        var h = t % 24 ;
        var d = parseInt(t / 24) ;
        document.getElementById("a2").innerHTML = "战士战斗了"  + h + "小时";
    }
    else if(t % 24 == 0){
        var h = t % 24 ;
        var d = parseInt(t / 24) ;
        document.getElementById("a2").innerHTML = "战士战斗了整整"  + d + "天";
    }
    else{
        var h = t % 24 ;
        var d = parseInt(t / 24) ;
        document.getElementById("a2").innerHTML = "战士战斗了" + d + "天" + h + "小时";
    }
}

function transform(){
    var f = document.getElementById("b1").value;
    if(isNaN(f) || f == ""){
        alert("请输入正确的华氏温度");
    }
    else{
        var c = 5 / 9.0 * (f - 32);
        f = parseFloat(f);
        c = c.toFixed(2);
        document.getElementById("b2").innerHTML = f + " °F";
        document.getElementById("b3").innerHTML = c + " °C";
    }
}

function calculate(){
    var a = document.getElementById("c1").value;
    if(a > 999 || a < 100 || isNaN(a) || a == ""){
        alert("请输入正确的三位数");
    }
    else{
        var b = parseInt(a / 100);
        var c = parseInt((a % 100) / 10);
        var d = parseInt((a % 100) % 10);
        document.getElementById("c2").innerHTML = b;
        document.getElementById("c3").innerHTML = c;
        document.getElementById("c4").innerHTML = d;
    }
}