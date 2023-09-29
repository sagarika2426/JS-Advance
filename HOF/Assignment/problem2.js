// Given an array of strings print the sum of lengths if the characters in the string are odd
//  Input - ["I", "am", "Sagarika", "Sahoo"]
//  Output - 6

var arr = ["I", "am", "Sagarika", "Sahoo"]

var out = arr.map(function(el){
  return el.length
  // map function returned the length of the strings in the arr
  // [1,2,8,5]
}).filter(function(el){
  return el%2==1
  // filter function filtered the output of map according to the 
  // return condition - [1,5]
}).reduce(function(sum, el){
  return sum+el
  // reduce function reduced the filtered array by adding each element
  // Output = 6
})
console.log(out)







// Given an array , return the elements that have even index and are even
// Use Higher-order functions
//  Input - [1, 4, 2, 3, 6, 8]
// Output - [2, 6]

var arr = [2, 4, 5, 3, 6, 8]

var out = arr.filter(function(el, i){
  return i%2 ==0;
  // first we filtered out the elements whose index(i) is even
  // [2,5,6]
}).filter(function(el){
  return el%2==0
  // from the filtered elements, again filtered the elememts which are even
  // [2,6]
})
console.log(out)