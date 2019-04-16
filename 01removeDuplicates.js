'use strict'
var nums01 = [1,1,2];
var nums02 = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums){
  for(var i=0; i < nums.length; i++){
    if(nums[i]==nums[i+1]){
      nums.splice(i,1)
      i--
    }
    // console.log(i)
    // console.log('---')
    // console.log(j)
  }
  return console.log(nums.length)
}
removeDuplicates(nums02)

// console.log(nums01.length)