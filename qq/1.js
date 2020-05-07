// 1.类型 
// number 数值型 整数 浮点数没有区分
// 2.字符串类型
// const常量，不可变
let nums = '631758924';//变成31758924
console.log(typeof nums);//typeof 运算符
let arr =[];
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2);
nums +=c;
// while 规律
// console.log(nums);
// console.log(nums);
console.log(nums,arr)
// 1.第一位删除
// 2.第二位放至最后一位