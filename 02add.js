'use strict'
var nums = [2, 7, 11, 15];
var nums02 = [3,2,4,6]
var nums03 = [3,3]
// var target = 9;
var twoSum = function(arr, sum) {
  // var list = [];
  // var num01;
  // var num02;
  for(var i=0;i<arr.length;i++){
      // list.push(i);
      // if(arr[i] + arr[i+1] === sum){
      //   num01 = i
      //   num02 = i+1
      // }
      for(var j=0;j<arr.length-1;j++){
        if((arr[i] + arr[j] == sum) && (i != j)){
          return console.log(i,j)
        }
      }
  }
  // console.log(list);
  // console.log(num01, num02)
  // return console.log([num01, num02])
};
twoSum(nums02, 6);

// var twoSum = function(nums, target) {
//   for (let i = 0; i <= nums.length -1; i++){
//     const m = nums.indexOf(target - nums[i]);
//     if (m !== -1 && m !== i)
//       return [i, m]
//   }
// };
// console.log(twoSum(nums, 13))

