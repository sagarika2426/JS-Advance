// reduce

var number = [1,2,3,4,5,6,7,8]
var out = number.reduce(function(sum, el){
  return sum+el;
})
console.log(out)

var out = number.reduce(function(sum, el){
  return sum+el;
},10)
// here we are giving 10 as an initial value of sum
console.log(out)


