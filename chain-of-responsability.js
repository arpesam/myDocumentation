// https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f


class Arithmetic {
  constructor() {
    this.value = 0;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  add(value) {
    this.value = this.value + value;
    return this;
  }
  subtract(value) {
    this.value = this.value - value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? (this.sum(...args).value) / args.length
      : undefined;
    return this;
  }
}

a = new Arithmetic()
a.sum(1, 3, 6)   // => { value: 10 } 
  .subtract(3)   // => { value: 7 }
  .add(4)        // => { value: 11 }
  .value         // => 11 

// Console Output
// 11


// ######################


class Arithmetic {
  constructor() {
    this.value = 0;
  }
  get val() {
    return this.value;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  add(value) {
    this.value += value;
    return this;
  }
  subtract(value) {
    this.value -= value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? (this.sum(...args).value) / args.length
      : undefined;
    return this;
  }
}

a = new Arithmetic()
a.sum(1, 3, 6)   // => { value: 10 } 
  .subtract(3)   // => { value: 7 }
  .add(4)        // => { value: 11 }
  .val           // => 11 

// Console Output
// 11
