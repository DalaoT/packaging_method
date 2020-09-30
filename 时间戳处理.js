(nos) => {
  let now = new Date(parseInt(nos) * 1000)
  let year = now.getFullYear();  //取得4位数的年份

  let month = now.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
  month = month < 10 ? '0' + month : month
  let date = now.getDate();      //返回日期月份中的天数（1到31）
  date = date < 10 ? '0' + date : date
  let hour = now.getHours();     //返回日期中的小时数（0到23）
  hour = hour < 10 ? '0' + hour : hour
  let minute = now.getMinutes(); //返回日期中的分钟数（0到59）
  minute = minute < 10 ? '0' + minute : minute
  let second = now.getSeconds(); //返回日期中的秒数（0到59）
  second = second < 10 ? '0' + second : second
  return `${year}-${month}-${date}   ${hour}:${minute}`
}