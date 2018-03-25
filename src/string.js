// 解析 json jsonp 数据
export function getJSON(str) {
  str = str.replace(/^[^{[]+/, '').replace(/[^}\]]+$/, '');
  try {
    return JSON.parse(str);
  } catch (error) {
    return {};
  }
}

// 没用占位
export function strtest() {

}
