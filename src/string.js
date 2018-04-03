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

/**
 * 清理图片标签
 *
 * @export
 * @param {string} str 文章内容
 */
export function clearImg(str) {
  return str
    .replace(/<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi, '<img src="$1">');
}

/**
 * 修复相对协议地址
 *
 * @export
 * @param {string} url url地址
 * @returns
 */
export function fixHttp(url) {
  return url.replace(/(?=^\/\/)/, 'http:');
}
