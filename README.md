# 神箭手云 - 工具集

## 使用方法

<http://52cik.github.io/shenjian-tools/dist/index.js>

```js
var tools = {}; // 声明工具对象

configs.initCrawl = function(site) {
  // 初始化方法中加入这行代码即可
  tools = eval(site.requestUrl('http://52cik.github.io/shenjian-tools/dist/index.js'));
}
```

## API

### tools.getTime(str)

> 获取字符串中的日期，兼容各种时间格式，返回 `new Date` 对象。

### tools.test()

> 测试工具是否生效
