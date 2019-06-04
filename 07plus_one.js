
var arr03 = [0]
var arr04 = [9,9]
var arr05 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var arr06 = [7,0,5,5,4,3]
var arr07 = [3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var arr08 = [1,2,9,9,0,1,9,5,1,9]
var plusOne = function(digits) {
  //  第一种解法失败
  // if(digits[digits.length-1] <= 8){
  //   digits[digits.length-1] += 1 
  // }else if(digits[digits.length-1] = 9) {
  //   digits[digits.length-1] = 0
  //   digits[digits.length-2] = 1
  // }
  // return digits;


  //  第二种解法，数字超过15位以上就失败，估计是数字太大了,太消耗内存了
  // var sum = 0;
  // for (var i=0; i < digits.length; i++){
  //   var sub_sum = digits[i] * Math.pow(10, digits.length-i-1);
  //   sum = sub_sum + sum;
  // }
  // sum++;
  // var arr_string=String(sum).split('')
  // var new_arr = []
  //   arr_string.forEach(function(item){
  //   new_arr.push(Number(item))
  //   // console.log(Number(item))
  // })
  // return new_arr;










  // 网友解法
  const values = digits.reverse();
  let i = 0;
  values[i] += 1;
  while (true) {
    if (values[i] >= 10) {
      values[i] = 0;
      if (values[i + 1] === undefined) {
        values[i + 1] = 1;
        break;
      } else {
        values[i + 1] += 1
      }
      i++
    } else {
      break;
    }
  }
  return values.reverse()

};

var arr01 = [1,2,3]
var arr02 = [5,5,8]
var arr10 = [1,3,9]
var arr11 = [1,3,9,9]
var arr12 = [9]
// 第二种解法update 
// var plusOne= function (digits) {
//   // 数组最后一项索引
//   var index = digits.length-1;

//   digits[index]++;
//   while(true){
//     if (digits[index] >= 10){
//       digits[index] = 0;
//       if (digits[index-1] === undefined ){
//         digits[index-1] = 1;
//         break;
//       }else {
//         digits[index-1]++;
//       }
//       index--;
//     }else{
//       break;
//     }
//   }
//   return digits
// }
  console.log(plusOne(arr12))
// console.log(Math.pow(10,3))