## GET POST
一个是req 一个是querstring(a=1&b=2)
在浏览器搜索请求有哪些？
用户输入url
img link script GET 参数也只能放到url里面去了
xmlhttprequest http postMan 只要客户端服务端约定好，参数放到哪里都不收限制的

baidu.com/search?s=js
组成url的一部分

从协议本身来说，并没有限制GET传递参数不能放到body
POST 传递参数，也可以放到 querstring


一个url由哪些组成
- 语义不同，GET，POST
- GET 资源可以缓存，POST不能缓存
- GET url长度有限(浏览器限制了) ，post req body不限制
- GET不安全 POST更安全一点。其实都是不安全的，htpp是一个明文传输，https更加安全，加密传输