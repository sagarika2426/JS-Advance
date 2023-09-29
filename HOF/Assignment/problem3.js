// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

var arr = ["assignment", "problem", "media", "upload"]
var out = arr.filter(function(el){
  return el[0] == "a" || el[el.length-1] =="a";
})
console.log(out);