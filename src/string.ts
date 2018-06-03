/**
 * 解析 json jsonp 数据
 * @param str 需要解析的字符串
 * @param def 默认返回
 */
export function getJSON(
  str: string,
  def: object | object[] = {},
): object | object[] {
  str = str.replace(/^[^{[]+/, '').replace(/[^}\]]+$/, '');
  try {
    return JSON.parse(str);
  } catch (error) {
    return def;
  }
}

// 图片正则
const reImg = /<img[^>]+?src="([^"]+)"[^>]*>(?:<\/img>)?/gi;

/**
 * 清理图片标签
 * @param str 文章内容
 * @param ext 修复图片后缀
 */
export function clearImg(str: string, ext: boolean = true): string {
  return str.replace(reImg, (m, src) => `<img src="${fixImg(src, ext)}">`);
}

/**
 * 修复图片后缀
 * @param url url地址
 * @param ext 修复图片后缀
 */
export function fixImgExt(url: string, ext: boolean = true): string {
  if (ext === false) {
    return url;
  }

  if (url.trim() === '') {
    return url;
  }
  // 第一财经类型带@参数图片
  // http://imgcdn.yicai.com/uppics/slides/2018/04/636588982981500913.png@250w_1e_1c
  if (/\.(jpe?g|gif|a?png|bmp|webp)@/i.test(url)) {
    // 636588982981500913.png@250w_1e_1c
    // 636588982981500913.png@250w_1e_1c.png
    return url.replace(/(\.\w+)@.+/, '$&$1');
  }

  // 有后缀就放行 （未知情况在说）
  if (/\.(jpe?g|gif|a?png|bmp|webp)/i.test(url)) {
    return url;
  }

  // 腾讯娱乐类型无后缀图片
  return url.replace(/(\?.+)?$/, '.jpg$&');
}

/**
 * 修复相对协议地址
 * @param url url地址
 */
export function fixHttp(url: string): string {
  if (url.trim() === '') {
    return url;
  }
  return url.replace(/(?=^\/\/)/, 'http:');
}

/**
 * 修复 相对协议地址 + 修复图片后缀
 * @param url url地址
 * @param ext 修复图片后缀
 */
export function fixImg(url: string, ext: boolean = true): string {
  if (url.trim() === '') {
    return url;
  }
  return fixImgExt(fixHttp(url), ext);
}

// 拉丁文范围正则
const reLatin = new RegExp('[\\x00-\\xff]+', 'g');
/**
 * 过滤拉丁文后的字符串长度 (计算中文长度)
 * @param {string} str 带计算的 html 文本
 * @return {number} 长度
 */
export function strLen(str: string): number {
  if (!str) {
    return 0;
  }
  return String(str).replace(reLatin, '').length;
}
