// 根据字符编码 =>找到对应的字符  String.formCharCode()
var numList = [];
for (var i = 48; i <= 57; i++) {
    var char = String.fromCharCode(i);
    numList.push(char);
}
console.log(numList);

var bigList = [];
for (var i = 65; i <= 90; i++) {
    var char = String.fromCharCode(i);
    bigList.push(char);
}
console.log(bigList);

var smallList = [];
for (var i = 97; i <= 122; i++) {
    var char = String.fromCharCode(i);
    smallList.push(char);
}
console.log(smallList);

var speList = ["_", "$"]; //允许使用的特殊字符

var normalList = numList.concat(smallList, bigList, speList);
console.log(normalList);   // 合法字符的集合  (在集合中即合法  否则非法)


function randCode() {
    var list = numList.concat(smallList, bigList);
    var str = "";
    for (var i = 0; i < 4; i++) {
        var index = Math.round(Math.random() * (list.length - 1));
        var char = list[index];
        if (str.indexOf(char) == -1) {
            str += char;
        } else {
            i--;
        }
    }
    return str;
}