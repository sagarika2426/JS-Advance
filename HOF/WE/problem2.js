// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

var arr = [1,2,3,4]
var out = arr.filter(function(el, i){
  return el%2==1;
}).reduce(function(sum,el){
  return sum+el
},0)

console.log(out)