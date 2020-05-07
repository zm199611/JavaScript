let enc_qq =[6,3,1,7,5,8,9,2,4],
qq = [];
head = 0;//添加一个头指针，变量可以承载中间值
tail = 9;
//数组是object
while(head<tail){
    //规则：不满足就退出
    // 条件：length boolean
    qq.push(enc_qq[head])//qq的抽象能力
    head++;//
    enc_qq[tail] = enc_qq[head];//相邻的元素变成了新的尾节点
    tail++;
    head++;
}
// enc_qq.shift();
// enc_qq.push(3);
console.log(qq.join(''))//object对象的一种，可以枚举的对象
//移除第一个元素，第二个元素放置到最后
