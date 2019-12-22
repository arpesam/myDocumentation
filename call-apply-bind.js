var obj = { num: 2 }
var obj2 = { num: 5 }

function addToThis(value) {
  return this.num + value
}

const usingCall = addToThis.call(obj, 2) // call let us intruct the above function to know whit 'this'it shoul use
console.log('call -> ', usingCall);


// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call() method
// The call() method takes arguments separately.
// The apply() method takes arguments as an array. (this is the only difference)
const arr = [3]
const usingApply = addToThis.apply(obj2, arr)
console.log('apply -> ', usingApply);


// Bind creates another funtions that connect an object and a function. 
const usingBind = addToThis.bind(obj)
console.log('bind -> ', usingBind);
console.dir(usingBind(arr))