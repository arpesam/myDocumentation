// used to iterate over a lot data that could be iterated
// https://www.youtube.com/watch?v=c85EStPZR8M&list=PLREW9ZuU80uTfmxo61-acnUYk3P_4plIF&index=5


const items = [1, 'devsage', false, 1.24]

function Iterator(items) {
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext() {
    return this.index < this.items.length
  },
  next() {
    return this.items[this.index++]
  } 
}

const iter = new Iterator(items)

console.log(iter.next())
console.log(iter.next())
console.log(iter.hasNext())