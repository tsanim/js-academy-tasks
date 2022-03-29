let animal = {
  eat() {
    this.full = true;
    console.log(this.full);
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); // -> this will be reference to rabbit object
