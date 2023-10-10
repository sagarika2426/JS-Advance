let arr = ["Sagarika", "Akash", "Rishabh", "Aparajita"]
arr.sort()
// console.log(arr)

let num = [1,22,34,44,6,8,9,10, 2, 3, 4]
arr.sort()
// console.log(num)
// here the number is getting printed like string

  // 1, 22, 34, 44, 6,
  // 8,  9, 10,  2, 3,
  // 4

  // so instead using above method we can use the below method for the numbers

  let num2 = [1,22,34,44,6,8,9,10, 2, 3, 4]
  num2.sort(asending);
  function asending(a,b){
    return a-b;
  }
  // console.log(num2)

num2.sort(desending);
  function desending(a,b){
    return b-a;
  }
  // console.log(num2)

num2.sort(mod)
  function mod(a,b){
    return a%3 - b%3
  }
  // console.log(num2)

  // for Objects
  var obj = [{fisrtName: "Sagarika", RollNum: 123},
  {fisrtName: "Aparajita", RollNum: 120},
  {fisrtName: "Manisha", RollNum: 130},
  {fisrtName: "Niketan", RollNum: 110}]
  // sort the object according to roll number - ascending 

  obj.sort(function(a,b){
    return a.RollNum - b.RollNum;
  })
  console.log(obj)

  // if we want to sort the object according to name - ascending - using comparator
  obj.sort(function(a,b){
    if(a.fisrtName>b.fisrtName){return 1}
    else if(a.fisrtName<b.fisrtName){return -1}
    else return 0
  })

  console.log(obj)
