// user wher you wnat to observe another object
// https://www.youtube.com/watch?v=45TeJEmcqk8&list=PLREW9ZuU80uTfmxo61-acnUYk3P_4plIF&index=6

function Subject() {
  this.observers = [] // array of observer functions
}

Subject.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn)
  },
  unsubscribe: function(functionToRemove) {
    this.observers = this.observers.filter(fn => {
      if (fn != functionToRemove)
        return fn
    })
  },
  fire: function () {
    this.observers.forEach(fn => {
      fn.call()
    })
  }

}

const subject = new Subject() 

function Observer1() {
  console.log("Observer 1 firing!")
}

function Observer2() {
  console.log("Observer 2 firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)

subject.fire()