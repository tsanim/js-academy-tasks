let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
    // if we want to have stomach prop for every object instance we should create new instance for its stomach prop
    // this.stomach = [...this.stomach, food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
