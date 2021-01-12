// 页面加载时  绑定了load事件  => 等页面所有内容加载完毕之后执行function中的代码
window.onload = function () {
    var btn = document.getElementById("btn");
    console.log(btn);
    btn.onclick = function () {
        alert(11111);
    }
}