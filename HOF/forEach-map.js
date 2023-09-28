// #forEach
// Let's say we want to print all the names

var names = ["Sagarika","Sahoo"]
newNames = names.forEach(function(element,index){
  console.log(element)
  console.log(index)
})

newNames = names.map(function(element,index){
      return element;
    
})

console.log(newNames);




