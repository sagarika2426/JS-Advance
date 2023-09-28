// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

var arr = [2,3,4]
var out = arr.reduce(function(product, el){
  return product*el
})

console.log(out)