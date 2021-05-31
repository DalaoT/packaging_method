// ----------时间戳函数转换时间----------
export function dateSwitch (nos, format) {
    let format_c = format
    let now = new Date(parseInt(nos) * 1000)
    let year = now.getFullYear();  //取得4位数的年份
    let month = now.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
    let date = now.getDate();      //返回日期月份中的天数（1到31）
    let hour = now.getHours();     //返回日期中的小时数（0到23）
    let minute = now.getMinutes(); //返回日期中的分钟数（0到59）
    let second = now.getSeconds(); //返回日期中的秒数（0到59）
    function p (s) { //补0
        return s < 10 ? '0' + s : s
    }
    //替换数值返回
    return format_c.replace(/YYYY/i, p(year)).replace(/MM/i, p(month)).replace(/DD/i, p(date)).replace(/HH/i, p(hour)).replace(/MIN/i, p(minute)).replace(/SS/i, p(second))
}
