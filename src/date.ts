import ms from './ms';

/**
 * 补零
 * @param n
 */
function pad(n: number | string): string {
  n = +n;
  return String(n < 10 ? '0' + n : n);
}

/**
 * 获取字符串中的日期
 *
 * @export
 * @param str 含有日期的字符串
 */
export function getTime(str: string): Date {
  const re = /(20\d{1,2})\D(\d{1,2})\D(\d{1,2})(?:\D+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/;
  let date = '';

  str.replace(re, (all, y, m, d, h, i, s) => {
    date = `${y}-${pad(m)}-${pad(d)}`;
    if (h) {
      date += ` ${pad(h)}`;
    }
    if (i) {
      date += `:${pad(i)}`;
    }
    if (s) {
      date += `:${pad(s)}`;
    }
    return '';
  });

  if (!/^20\d+-\d+-\d+/.test(date)) {
    return new Date(0);
  }

  const fix = '0000-00-00 00:00:00'.slice(date.length);

  date += fix;
  return new Date(date);
}

/**
 * 指定日期是否过期
 *
 * @export
 * @param date 指定日期
 * @param time ms模块参数
 */
export function expired(date: Date | string, time: string): boolean {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return +date < Date.now() - ms(time);
}
