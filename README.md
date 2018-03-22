# 神箭手云 - 工具

## 使用方法

```js
var tools = {}; // 声明工具对象

configs.initCrawl = function(site) {
  // 初始化方法中加入这行代码即可
  eval(site.requestUrl('http://t.cn/RnaZRwc'));
}
```

## API

### tools.getTime(str)

> 获取字符串中的日期，兼容各种时间格式，返回 `new Date` 对象。
