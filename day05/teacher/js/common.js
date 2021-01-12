function isRun(year) {   // 形式参数
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}


// var result = isRun(2000);
// console.log(result);
// var result = isRun(1900);
// console.log(result);