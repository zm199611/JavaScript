function sum(x) {
    // return x;
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}
console.log(sum(1)(2)(3) === 6)

// return 出去就是具有柯里化(函数参数分批次)
// fun普通的函数