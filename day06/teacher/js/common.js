
/* 
    level
    功能 判断成绩等级

    参数描述
     grade   string|number  

    返回值  ABCDE

*/
function level(grade) {   //形式参数 (函数封装过程中的假设性参数)
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "E";
    }
}

function isRun(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

function isYearOk(year) {   //此处也是函数封装  但是和页面有牵连,灵活性差(当前页面可用,但是一旦拿到其他页面会报错 )
    // 3. 点击取值 (字符串类型)
    // var year = yearInp.value;

    // 4. 判断年份
    if (year >= 1000 && year <= 9999 && year % 1 == 0) {
        return true;
    } else {
        return false;
    }
}


function isMonthOk(month) {

    // var month = monthInp.value;
    // 5. 判断月份
    if (month >= 1 && month <= 12 && month % 1 == 0) {
        // console.log("month ok");
        return true;
    } else {
        return false;
    }
}

function isDayOk(year, month, day) {
    // 3. 点击取值 (字符串类型)
    // var year = yearInp.value;
    // var month = monthInp.value;
    // var day = dayInp.value;
    // console.log(year, month, day);

    var maxDay = null;
    switch (month * 1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:

            maxDay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDay = 30;
            break;
        case 2:
            console.log("2月");
            // if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            //     maxDay = 29;
            // } else {
            //     maxDay = 28;
            // }

            // 函数之间 也是可以相互调用的
            if (isRun(year)) {   // isRun(year) == true  闰年
                maxDay = 29;
            } else {
                maxDay = 28;
            }


            break;

        default:
            alert("月份有误");
            break;
    }

    if (day >= 1 && day <= maxDay && day % 1 == 0) {
        // resultInp.value = "格式正确";
        return true;
    } else {
        return false;
    }
}