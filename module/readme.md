## commonJS
导出:module.export
module.export = function(){}
module.export = {}
导入: require

1. commonjs 一定要是  代码运行起来才知道引入了那些模块
2. 可以出现在逻辑分支里

## es-module

1. import / export 无论写在哪里，都会提前执行
2. 在代码静态分析(代码不用执行，就可以分析出你引入了哪些模块)

AMD
CMD：统一模块化方案
```js
(function(){

})()

```
UMD
CJS 