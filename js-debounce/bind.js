// call,apply  一类
// bind：调用函数除了绑定this，也可以分批传递参数
function sum(a, b, c){
    return a + b +c;
}
// 参数传完整
sum.call(null,1,10,20);
// 可以不完整，会返回一个函数，继续传递剩下的参数
sum.bind(null,1,10);
let add11 = sum.bind(null,1,10);
let res = add11(20);
console.log(res);

function test(reg,str){
    return reg.test(str);
}

let str = ``,str1=`123`,str2=`234`,str3=`456`
let whiteSpace = /\n/g
//  \n中 n：new line
//  \t中 t:tab
// glob:全局匹配
console.log(test(whiteSpace,str));
console.log(test(whiteSpace,str1));
console.log(test(whiteSpace,str2));
console.log(test(whiteSpace,str3));
// test:测试一下，某个字符串不再回车
// 每次都带着Whitespace