    严格模式 "use strict";
    
    "use strict"  放在作用域最前面(全局作用域 函数作用域 匿名函数的自调用)
    
    /*  
        优点
        - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
        (1.全局变量要显式的声明，否则会报错；必须先声明变量然后再使用。)
        (2.创建eval()作用域)
    
    　　- 消除代码运行的一些不安全之处，保证代码运行的安全;
        (1. 禁止this关键字指向全局对象。)
    
    　　- 提高编译器效率，提高运行速度；
    
    　　- 为未来新版本的Javascript做好铺垫。
    */


    严格模式中 不使用 关键词  var  直接声明变量会报错
    a = 100;
    console.log(a);


    fn()
    function fn() {
        "use strict";
        a = 100;
        console.log(a);
    }


    严格模式中  创建eval()作用域    eval()中的声明的变量是局部的  
    
    var result = eval("1+1"); eval 将传入的字符串按照 js语法执行
    console.log(result);
    
    eval("function fn(){console.log(1111111)};fn()")    
    
    eval("var a = 100;");
    console.log(a);


    严格模式 this的问题    this使用时必须要有依存关系
    function fn() {
        console.log(this);
    }
    fn(); 此处函数调用时没有明显的依存关系  所以this 为undefined
    window.fn();此处函数调用时函数fn经由window调用   所以this 为window


    严格模式中  this使用时必须要有依存关系
    var obj = {
        name: "www",
        age: 18,
        say: function () {  this指向obj
            console.log(this.name, this.age);
        }
    }
    obj.say(); this  仍然指向  obj




    严格模式下   禁止删除变量
    delete obj.age;  删除对象  可行
    console.log(obj);
    
    var result = Object.getOwnPropertyDescriptors(obj);
    console.log(result);
    
    var x = 100;   删除变量   报错
    delete x;
    console.log(x);
    
    正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。
    var str = new String("123");
    var result = Object.getOwnPropertyDescriptors(str);
    console.log(result);
    str[0] = "a";
    console.log(str);
    
    var obj = {};
    Object.defineProperty(obj, "name", {Object 自定义属性的方法
        value: "www",
        writable: false,
        enumerable: false,
        configable: false
    })
    console.log(obj);
    
     严格模式中  函数参数不允许重命名
    function f(a, a, b) { 语法错误
    
        return;
    
    }