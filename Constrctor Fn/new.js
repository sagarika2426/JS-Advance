function NikeProduct(n, b, p) {
  this.name = n;
  this.brand = b;
  this.price = p;
  this.print = function () {
    console.log(this);
  };
}

// let p1 = new NikeProduct("shoe", "nike", 1000);
// let p2 = new NikeProduct("sneaker", "nike", 2000);
// console.log(p1.brand);
p1.print();
p2.print();

// What does new do?
// It returns the object and points this to the newly created object

