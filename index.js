/**
 * 获取字符串中的日期
 *
 * @export
 * @param {string} str 含有日期的字符串
 * @return {Date}
 */
export function getTime(str) {
  const re = /(20\d+)\D(\d+)\D(\d+)(?:\D+(\d+):(\d+)(?::(\d+))?)?/;
  let date = '';

  str.replace(re, (all, y, m, d, h, i, s) => {
    date = `${y}-${m}-${d}`;
    if (h) date += ` ${h}`;
    if (i) date += `:${i}`;
    if (s) date += `:${s}`;
  });

  if (!/^20\d+-\d+-\d+/.test(date)) {
    return null;
  }

  date = date.replace(/(?=\b\d\b)/g, '0');

  const pad = '0000-00-00 00:00:00'.slice(date.length);

  date += pad;
  return new Date(date);
}

export function test() {}
