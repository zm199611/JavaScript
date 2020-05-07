// 将一个字符串改变成另一个字符串，莱温斯坦距离多少
var a = "mitcmu";
var b = "mtacnu";
var n = 6,m = 6;//长度有可能不等
// 各种策略都需要尝试 f(m,n) f(0,0)
// 回溯算法
var minDist = Infinity//  最大值，正无穷大
// 把一个大问题分成若干个小问题，递归
function lwstBT(i,j,edist){//递归 每一次都是 i,j
    // dist 以来上一步的编辑距离 0 + 1
    // 退出条件
    if(i == n || j == m){ //不一定同时到达
        if(i<n)edist +=(n-i);
        if(j<m)edist +=(m-j);
        if(edist<minDist)minDist = edist;
        return ;
    }
    if(a[i] == b[j]){
        lwstBT(i+1,j+1,edist); //两个相等，不改变编辑距离
    }else{
        // 穷举
        // 附近的情况
        lwstBT(i+1,j,edist+1);//删除 a[i]  或者b[j]前添加一个字符
        // 增
        // 删
        lwstBT(i,j+1,edist+1);//删除b[j]或a[i]前添加一个字符
        lwstBT(i+1,j+1,edist+1);//删除b[j]或a[i]前添加一个字符

        // 改
    }
}
lwstBT(0,0,0);
console.log(minDist)