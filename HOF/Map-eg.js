var number = [1,2,3,4,5]
var newNum = number.map(function(el){
  return el*2;
})
console.log(newNum)

// if we want to do the same thing by using foreach
var box = [];
 number.forEach(function(el){
  box.push(el*2)

})
console.log(box)