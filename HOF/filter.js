// if we want too filter out any speciific thing we use filter

var number = [1,2,3,4,5,6,7,8]
var out = number.map(function(el){
  return el%2 == 0;
})

// map will show the rusult in bollean form if the number is true or false according to the return condition

console.log(out)

var out = number.filter(function(el){
  return el%2 == 0;
})

console.log(out)

// filter will give you the numbers which are fulfilling the return condition