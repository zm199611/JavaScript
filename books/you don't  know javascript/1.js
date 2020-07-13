// AO对象(Activation Object)
// JS基于原型的面向对象

// a._proto_ =b;
// b._proto_ = c;
// a可以获取到c的属性
// 变量查找，冒泡
// AO{ a:1 }Active Object


function func(){
    var a = 2;
    var a = 1;
    console.log(a)
}
func()