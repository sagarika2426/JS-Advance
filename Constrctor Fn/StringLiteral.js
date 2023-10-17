// -------------- CALL, APPLY, BIND -------------->>>>>>>>>>
// DRY ----> Do not repeat yourself;

let bedroom = {
  name: "bedroom",
  purpose: "sleep",
};

let livingRoom = {
  name: "Living Room",
  purpose: "Rest",
};

let storeRoom = {
  name: "Store Room",
  purpose: "Store",
};

function food(food, food2) {
  console.log(`Serving ${food} and ${food2} in ${this.name}`); // String Literal
  // console.log("Serving" + food + "in" + this.name);
}

// food.call(bedroom, "Pizza");
// food.call(livingRoom, "Pizza");
// food.call(storeRoom, "Pizza");

// let arr = ["Pizza"];
// food.apply(bedroom, arr);
// food.apply(livingRoom, ["Pizza"]);
// food.apply(storeRoom, ["Pizza"]);

// let f1 = food.bind(bedroom, "Pizza");
// let f2 = food.bind(livingRoom, "Pizza");
// let f3 = food.bind(storeRoom, "Pizza");

// food.call(bedroom, "Pizza", "samosa");

// food.apply(bedroom, ["Burger", "momos"]);
