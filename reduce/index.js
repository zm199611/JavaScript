var arr = [1,2,3,4];
// reduce 快速的得到数组之和
// 一句话就出来了，arr.map filter ...
// 具有良好的可读性
var sum = arr.reduce(function(pre,cur,index,arr){
    console.log(pre,cur,index);
    return pre + cur;

},0);
console.log(sum);
// var sum = arr.map().filter() 链式调用