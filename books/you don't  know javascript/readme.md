# 作用域是什么

- react mvvm setState state  状态机制
    js之中状态由变量驱动，程序的状态 储存值 声明空间：(闭包 作用域 变量查找 变量提升)
    储存值可以被修改 
- 赋值过程
    var a = 2 他是怎么运行的  var a; a = 2;
    a 是identifier  标识符 = 运算符  2 value literal


## 编译原理
    语言执行的底层  操作系统->编译原理编译器 解译器
    引擎 V8 
    三个阶段：
    1. 分词/词法分析
        [var,a,=,2]
        token 语法错误
        最后成为二进制语言
        
    2. 解析/语法分析
        语法树
        编译器也是一段代码 运行
        HTML <div></div>DoM树
        (Abstract Syntax Tree  AST)
    3. 代码生成

        JIT