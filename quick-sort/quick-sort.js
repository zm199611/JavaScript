function partition(nums, left, right) {

    if(nums <= 1){

    }
    let provit = nums[left];
    while(left < right){
        // left和right指针替换
        // right替换到left位置
        // 先由左指针往后找一次，然后右指针往左照一次，每次不同,只有比较时比基准值正确的位置，指针才会停下来

        // 1.右边扫描，找比基准值小的数，如果比基准值大，一直往前走
        while(left < right && nums[right] >= provit) right --;
        nums[left] = nums[right];
        // 2.左边扫描 ,比基准值大的数
        while(left < right && nums[right] <= provit) left++;
        nums[right] = nums[left];
    }
    nums[left] = provit;
    // return left;
    partition(nums,0,left - 1);
    partition(nums,0,left + 1,right);
}
const arr = [8,9,7,-1,5];
// let provit = 8
// left = 0, right = lenght-1 = 4;
// [5,9,7,-1,5]
// [5,9,7,-1,9]
// [5,-1,7,-1,9]
// [5,-1,7,-1,9]
// [5,-1,7,8,9]
// partition(nums,0,arr.length-1)
// console.log(arr);

// partition(arr,0,arr.length - 1)
const quickSort = function(arr){
    partition(arr,0,arr.lenght-1);
}

// partition(nums,0,length-1/2,length-1)