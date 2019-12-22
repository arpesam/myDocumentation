
// JS Nuggets
// Array iteration: 8 methods
// https://www.youtube.com/watch?v=Urwzk6ILvPQ

// forEach
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index);
});


// map
const three = [1, 2, 3];
const doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);


// filter
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);


// reduce
const sum = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log('reduce -> ', sum)


// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);


// every
const allPositiveNumbers = [1, 2, -3].every(function (item) {
  return item > 0;
});
console.log(allPositiveNumbers);


// find
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
  return item.id === 'b';
});
console.log(found);


// find index
const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === 'b';
});
console.log(foundIndex)



// JS Nuggets: 10 Common Array Methods

var arr = ["a", "b", "c"];

arr.push("d"); // add value in array
console.log(arr);

console.log(arr.pop()); // removes the last value
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2)); // sum two arrays
console.log(arr2);

console.log(arr.join("!")); // put the values together with ! -> 'a!b!c'

console.log(arr.reverse()); // revert the values 
console.log(arr);

console.log(arr.shift()); // removes the first value
console.log(arr);

console.log(arr.unshift("p")); // put a value at the first position
console.log(arr);

console.log(arr.slice(1,3)); // cut the 1 till 3 position 

console.log(arr.sort(arr)); // reorginize the array - The sort order can be either alphabetic or numeric
console.log(arr);

console.log(arr.splice(2, 2, "JS Nuggets")); // removes the second position and add 'JS Nuggets'
console.log(arr);

