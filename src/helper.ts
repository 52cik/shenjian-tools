/**
 * 业务工具集合
 */
import { clearImg } from './string';
import { entities } from './entities';

/**
 * 是否为深度文章
 * @param length 文字字数
 */
export function isDeep(length: number) {
  return length > 1700;
}

/**
 * 内容通用过滤
 * @param str 字符串
 */
export function content(str: string) {
  return clearImg(entities(str));
}
