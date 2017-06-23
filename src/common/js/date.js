/**
 * Created by Administrator on 2017/6/22.
 */
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let i in o) {
    if (new RegExp(`(${i})`).test(fmt)) {
      let str = o[i] + ''; // 转换成字符串
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1 ? str : padLeftZero(str)));
    }
  }
  return fmt;
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
