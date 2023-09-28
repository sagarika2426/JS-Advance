// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

var arr=[1,2]
var out = arr.map(function(el){
  return el*2;
})
console.log(out)