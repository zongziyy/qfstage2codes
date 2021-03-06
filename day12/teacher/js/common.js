function getFirstDayWeek(date) {
    date = new Date(date);   // 得到一个与原日期相同的新日期   => 不影响原日期
    date.setDate(1);
    return date.getDay()
}

function getLastMonthDays(date) {
    date = new Date(date);
    date.setDate(0);
    // console.log(date.getDate());
    return date.getDate();
}

function getThisMonthDays(date) {
    date = new Date(date);
    // date.setMonth(date.getMonth() + 1);  造成的问题 => 只是月份向后加一, 日期在(31=> 30   , 31,30=> 28/29  日期会超出最大临界值  向后换算 ) 
    // 2021-10-31 => 2021-11-31(超出最大临界值)  =>  2021-12-1  (后面的全都错了)
    // 2021-1-31 => 2021-2-31 (超出最大临界值)  => 2021-3-3  (后面的全都错了)

    // 怎么解决?      经分析 起始日期是几号对此方法 没有任何影响,我们可以提前将日期设置为1 => 这样的话就不可能超出了
    date.setDate(1);

    date.setMonth(date.getMonth() + 1); // 将月份设置为下个月
    date.setDate(0);
    // console.log(date.getDate());
    return date.getDate();
}