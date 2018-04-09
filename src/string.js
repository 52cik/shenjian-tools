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
    .replace(/<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi, function (m, src) {
      return '<img src="' + fixImg(src) + '">';
    });
}

/**
 * 修复图片后缀
 *
 * @export
 * @param {string} url url地址
 */
export function fixImgExt(url) {
  // 第一财经类型带@参数图片
  // http://imgcdn.yicai.com/uppics/slides/2018/04/636588982981500913.png@250w_1e_1c
  if (/\.(jpe?g|gif|a?png|bmp|webp)@/.test(url)) {
    // 636588982981500913.png@250w_1e_1c
    // 636588982981500913.png@250w_1e_1c.png
    return url.replace(/(\.\w+)@.+/, '$&$1');
  }

  // 有后缀就放行 （未知情况在说）
  if (/\.(jpe?g|gif|a?png|bmp|webp)/.test(url)) {
    return url;
  }

  // 腾讯娱乐类型无后缀图片
  return url.replace(/(\?.+)?$/, '.jpg$&');
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

/**
 * 修复 相对协议地址 + 修复图片后缀
 *
 * @export
 * @param {string} url url地址
 * @returns
 */
export function fixImg(url) {
  return fixImgExt(fixHttp(url));
}
