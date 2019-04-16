// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

var arr1 = [1,2,3,0,0,0];
var arr2 = [2,5,6];

var merge = function(nums1, m, nums2, n){
  // var arr03 = nums1.concat(nums2)
  // // console.log(arr03.sort())
  // return arr03.sort()

  //以下参考别人的答案
  for(let i=0;i<n;i++){
    nums1[m+i] = nums2[i]
  }
  nums1.sort(function(a,b){
    return a-b
  })
  return nums1
};

console.log(merge(arr1,6,arr2,3))