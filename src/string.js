/**
 * 解析 json jsonp 数据
 *
 * @export
 * @param {string} str 需要解析的字符串
 * @param {object|array} def 默认返回
 * @returns
 */
export function getJSON(str, def) {
  str = str.replace(/^[^{[]+/, '').replace(/[^}\]]+$/, '');
  try {
    return JSON.parse(str);
  } catch (error) {
    return def || {};
  }
}

// 没用占位
export function strtest() {

}
