// 1
function breakfast(item, time, brushteeth)
{
  brushteeth();
  console.log("I am eating" + " " + item + " " + "at" + " " +time)
}

breakfast("idli", "8am", brushteeth);
// HOF means calling function inside a function

function brushteeth()
{
  console.log("First Brush your teeth")
}


// 2
function sum(a, b,result)
{
  var out = a+b;
  // console.log(out);
  result(out)
}

sum(3,5, result)

function result(output)
{
  console.log("Your Output is" + " " + output)
}