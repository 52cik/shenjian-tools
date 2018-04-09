import ms from './ms';

/**
 * 补零
 *
 * @param {any} n
 * @returns
 */
function pad(n) {
  n = +n;
  return n < 10 ? '0' + n : n;
}

/**
 * 获取字符串中的日期
 *
 * @export
 * @param {string} str 含有日期的字符串
 * @return {Date}
 */
export function getTime(str) {
  const re = /(20\d{1,2})\D(\d{1,2})\D(\d{1,2})(?:\D+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/;
  let date = '';

  str.replace(re, (all, y, m, d, h, i, s) => {
    date = `${y}-${pad(m)}-${pad(d)}`;
    if (h) date += ` ${pad(h)}`;
    if (i) date += `:${pad(i)}`;
    if (s) date += `:${pad(s)}`;
  });

  if (!/^20\d+-\d+-\d+/.test(date)) {
    return null;
  }

  const fix = '0000-00-00 00:00:00'.slice(date.length);

  date += fix;
  return new Date(date);
}

/**
 * 指定日期是否过期
 *
 * @export
 * @param {Date|string} date 指定日期
 * @param {string} time ms模块参数
 * @returns
 */
export function expired(date, time) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return +date < Date.now() - ms(time);
}
