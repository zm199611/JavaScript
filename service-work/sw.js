console.log(1)
// 请求 -> sw.js -> 后端
// sw.js 监听 请求 之前有没有请求过
// 如果请求过 直接去缓存
// 如果没有 我们帮浏览器发出请求 得到内容 我发给浏览器 同时
// 再缓存一次

const change_name = "App" + 1;

this.addEventListener('install',function(params) {
    event.waitUntil(
        caches.open(change_name).then((cache) =>{
            // www.baidu.com
            cache.addAll([
                './',
                'js/bundle.js'
            ])
        })
    )
})