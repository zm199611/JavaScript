 ## this
 **运行时**决定的
 书写的时候
 ```js
 function foo() {
     this.a + b;
 }
 foo
 ```
 - 默认this指向window
 - 对象.调用 指向 对象
 ```js
 var obj1 = {
        a: 1,
        say : function(){
            console.log(this.a)
        }
    }
    var obj2 ={
        a:2
    }
    obj1.say.call(obj2);//会输出啥 2
    obj1.say()       //指向哪里 1
</script>
 ```
 - call/apply调用，将指明this指向哪里，指向第一个参数
 