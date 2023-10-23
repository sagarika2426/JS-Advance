// Nike product (brand, logo, seller) --- from flipkart

const product = {
  brand: "Nike",
  logo: "url",
  seller: "Flipkart",
};

let p1 = Object.create(product);
console.log(p1.brand);


// Constructor function
// Create a constructor function to create the blueprint

function Product(type) {
  this.type = type;
  this.brand = "nike";
  (this.logo = "URL"), (this.seller = "Flipkart");
}

Product.prototype.discount = function () {
  console.log("50% discount");
};

Product.prototype.changeType = function (type) {
  this.type = type;
};

Product.prototype.price = 1000;

function discount () {
  console.log("50% discount");
};

