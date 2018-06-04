declare namespace ShenJian {
  interface Tools {
    /**
     * 获取字符串中的日期
     *
     * @export
     * @param str 含有日期的字符串
     */
    getTime(str: string): Date;

    /**
     * 指定日期是否过期
     *
     * @export
     * @param date 指定日期
     * @param time ms模块参数
     */
    expired(date: Date | string, time: string): boolean;

    /**
     * 解析 json jsonp 数据
     * @param str 需要解析的字符串
     * @param def 默认返回
     */
    getJSON(str: string, def?: object | object[]): object | object[];

    /**
     * 清理图片标签
     * @param str 文章内容
     * @param ext 修复图片后缀
     */
    clearImg(str: string, ext?: boolean): string;

    /**
     * 修复图片后缀
     * @param url url地址
     * @param ext 修复图片后缀
     */
    fixImgExt(url: string, ext?: boolean): string;

    /**
     * 修复相对协议地址
     * @param url url地址
     */
    fixHttp(url: string): string;

    /**
     * 修复 相对协议地址 + 修复图片后缀
     * @param url url地址
     * @param ext 修复图片后缀
     */
    fixImg(url: string, ext?: boolean): string;

    /**
     * 过滤拉丁文后的字符串长度 (计算中文长度)
     * @param {string} str 带计算的 html 文本
     * @return {number} 长度
     */
    strLen(str: string): number;

    // 缓存工具
    store: Store;

    // 业务工具集合
    helper: Helper;
  }

  // 缓存工具
  interface Store {
    /**
     * 存储
     * @param key 键名
     * @param val 值
     */
    set(key: string, val: any): void;
    /**
     * 获取
     * @param key 键名
     */
    get(key: string): any;
    /**
     * 删除
     * @param key 键名
     */
    del(key: string): void;
    /**
     * 清空
     */
    clear(): void;
  }

  // 业务工具集合
  interface Helper {
    /**
     * 是否为深度文章
     * @param length 文字字数
     */
    isDeep(length: number): boolean;
  }
}
