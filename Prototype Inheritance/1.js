// Cat family :- Tiger, lion, panther, leopard, cheetah

const cat = {
  name: "cat",
  legs: 4,
  fur: true,
  tail: true,
  type: "animal",
};

// const tiger = {
//   name: "tiger",
//   legs: 4,
//   fur: true,
//   tail: true,
//   type: "animal",
// };

// const lion = {
//   name: "lion",
//   legs: 4,
//   fur: true,
//   tail: true,
//   type: "animal",
// };

const tiger = Object.create(cat);
tiger.name = "tiger";
console.log(tiger);