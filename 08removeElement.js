var arr = [0,1,2,2,3,0,4,2];
var arr02 = [3,2,2,3]
var val = 3;
var arr03 = [0,1,2,2,3,0,4,2]


var removeElement = function(nums, val) {
	// return	nums.filter((item) => {
	// 	return (item !== val)
	// })
	// var new_arr = nums.filter((item) => {
	// 	return (item !== val)
	// });
	// return new_arr.length

	for(var i = 0;i < nums.length; i++){
		if(nums[i]===val){
			nums.splice(i, 1)
			i--;
		}
	}
	return nums.length
	
};

console.log(
	removeElement(arr03, 2)
)