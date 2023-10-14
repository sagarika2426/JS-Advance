// This keyword
/*
1. Functions
2. Global scope
3. Methods

*/

console.log(this);

function func() {
  console.log(this);
}

func();

let obj = {
  team: "csk",
  print: function () {
    console.log(this);
  },
};

obj.print();

// this will always refer to an object
// this will refer either to global or window object or custom object which you created;
// this alsways refers to its parent object