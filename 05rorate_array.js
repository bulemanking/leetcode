var arr01 = [1,2,3,4,5,6,7]

var rotate = function(nums, k){
  // var remove = nums.splice(-k, k)
  // var nums = remove.concat(nums)
  // return nums
    for(let i=0;i<k;i++) {
        nums.unshift(nums.pop())
    }
    return nums;
}
console.log(rotate(arr01, 1))

// 注释的部分是自己写的。能通过自己的测试，但是不能通过leet的‘提交答案’
// 下面的是参见网友的，能通过LeetCode的‘提交答案’