// Spread Operator:

// let arr =[1,2,3,4,5,6];
// console.log(...arr);

// let color1 = ["black", "blue", "red"];
// let color2 = ["cream", "yellow","pink"]
// // lets say we want to add color1 to color 2, and using spread operator:    let color2 = [...color1,"cream", "yellow","pink"]
// // console.log("color2");
// let new = [...color1, ...color2]
// console.log(new)




// Rest Operator:

// lets say we have 5 boxes, you - 1 and your sis takes rest of the box
// your sis will put these boxes in a container to carry - array

function box(a, ...b){
    // function box(...b, a) ---- you can't do this
    console.log(a);
    console.log(b);
}

box("1", "2", "3", "4")
// OP:
// 1
// (3) ['2', '3', '4']
