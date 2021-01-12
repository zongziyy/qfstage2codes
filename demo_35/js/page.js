// 分页插件需要知道哪些信息

// count   数据的总条数
// showNum  每页显示多少条
// pageIndex   用来记录页码(默认1)
// showPage   页码超出时,默认显示几个页码(假如有两千页,只显示5页)

// count,showNum => 推算出 maxPage
// maxPage = Math.ceil(count/showNum)  最大页码  



function Page(selector, options) {
    this.target = document.querySelector(selector);
    this.options = {  // 默认的options
        count: 100,
        showNum: 5,
        pageIndex: 1,
        showPage: 5,
        // ...options,
    };   // 可能要设置默认值 (一会)

    // options= {  // 默认的options
    //     count: 50,
    //     showNum: 10,
    // }
    for (var key in options) {
        this.options[key] = options[key];
    }


    this.init();

    // var { count = 10, showNum = 5, pageIndex = 1, showPage = 5, callback } = options;
    // this.count = count;
    // this.showNum = showNum;
    // this.pageIndex = pageIndex;
    // this.showPage = showPage;
    // this.callback = callback;
}

Page.prototype.init = function () {

    // 重复生成的问题
    // 下一次生成之前清空上一个
    this.target.innerHTML = "";

    this.target.classList.add("page");  // 给目标元素添加class名page (放置目标元素没有class名page 导致样式失效);

    this.createHTML();
    this.createPage();
}

Page.prototype.createHTML = function () {

    // count,showNum,pageIndex,showPage  => this.options
    var maxPage = Math.ceil(this.options.count / this.options.showNum);  //最大页码

    var _this = this;

    // 动态生成 分页的html结构放到目标元素中
    // 左边的page_num
    var pageNum = document.createElement("div");
    pageNum.className = "page_num";

    // 上一页
    var prev = document.createElement("span");
    prev.className = "prev";
    prev.textContent = "上一页";

    prev.onclick = function () {
        _this.options.pageIndex--;

        _this.createPage();
        _this.options.callback(_this.options.pageIndex);
    }

    pageNum.appendChild(prev);

    // 页码的盒子
    pageBox = document.createElement("ul");
    pageBox.className = "pageBox";
    pageNum.appendChild(pageBox);


    // 下一页
    var next = document.createElement("span");
    next.className = "next";
    next.textContent = "下一页";

    next.onclick = function () {
        _this.options.pageIndex++;

        _this.createPage();
        _this.options.callback(_this.options.pageIndex);
    }

    pageNum.appendChild(next);

    this.target.appendChild(pageNum);


    // 右边的page_skip
    var pageSkip = document.createElement("div");
    pageSkip.className = "page_skip";

    var em = document.createElement("em");
    em.innerHTML = `共<b>${maxPage}</b>页&nbsp;到第`;
    pageSkip.appendChild(em);

    var skipInp = document.createElement("input");
    skipInp.className = "skip";
    skipInp.type = "number";
    skipInp.value = this.options.pageIndex;
    skipInp.min = 1;
    skipInp.max = maxPage;
    pageSkip.appendChild(skipInp);
    skipInp.onchange = function () {
        var val = this.value;
        if (val < 1) {
            this.value = 1;
        }
        if (val > maxPage) {
            this.value = maxPage;
        }
    }

    var em = document.createElement("em");
    em.innerHTML = `页`;
    pageSkip.appendChild(em);

    var btn = document.createElement("a");
    btn.href = "javascript:;";
    btn.textContent = "确定";
    btn.className = "btn";
    pageSkip.appendChild(btn);

    btn.onclick = function () {
        _this.options.pageIndex = skipInp.value * 1;
        _this.createPage();
        _this.options.callback(_this.options.pageIndex);
    }

    this.target.appendChild(pageSkip);


    this.pageBox = pageBox;  // createPage中需要使用
    this.skipInp = skipInp;
}

Page.prototype.createPage = function () {
    this.pageBox.innerHTML = "";  // 每次生成之前  清空上一次

    var _this = this;

    var maxPage = Math.ceil(this.options.count / this.options.showNum);  //最大页码

    if (this.options.pageIndex < 1) {
        this.options.pageIndex = 1;
    }
    if (this.options.pageIndex > maxPage) {
        this.options.pageIndex = maxPage;
    }
    this.skipInp.value = this.options.pageIndex;
    // console.log(pageIndex);

    var mid = Math.floor(this.options.showPage / 2); // 2

    if (this.options.pageIndex <= mid) {   //pageIndex <=2
        var start = 1;   // 页码的起始位置
        var end = this.options.showPage <= maxPage ? this.options.showPage : maxPage;  // 页码的终止位置
    } else if (this.options.pageIndex > mid && this.options.pageIndex <= maxPage - mid) {
        var start = this.options.pageIndex - mid;
        var end = this.options.pageIndex + mid;

        if (this.options.showPage % 2 == 0) {
            // start++;   中心页码前移  
            end--;       // 中心页码后移
        }

    } else {
        var start = maxPage - this.options.showPage + 1;
        var end = maxPage;
    }

    start = start < 1 ? 1 : start; // 如果showPage 和 maxPage相差不大可能出现0 和 负数

    for (var i = start; i <= end; i++) {
        var li = document.createElement("li");
        if (i == this.options.pageIndex) {   //对应下标的页码改为活跃状态
            li.classList.add("active");
        }
        li.textContent = i;
        this.pageBox.appendChild(li);

        li.onclick = function () {
            _this.options.pageIndex = this.textContent * 1;
            _this.createPage();
            _this.options.callback(_this.options.pageIndex);
        }

    }
}