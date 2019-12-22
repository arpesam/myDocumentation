// https://www.youtube.com/watch?v=LD1tQEWsjz4

const obj1 = { num: 1, name: 'Jon Doe' }
const obj2 = { num2: 2 }

// instanceof verify if an value is a instance of a prinitive value
console.log('instanceof ->', obj1 instanceof Object);

// assign - combine two objects
const finalObj = Object.assign(obj1, obj2)
console.log('assign ->', finalObj)

// hasOwnProperty - verify if a porperty is directly defined in a object instead of a prototype 
console.log('hasOwnProperty -> ', obj1.hasOwnProperty('name'))

// defineProperty - add a property in a obj and allow to set some configurations to this new key
const obj = { num: 1, name: 'Jon Doe' }
Object.defineProperty(obj, 'age', { writable: true })
console.log('defineProperty -> ', obj)

// getOwnPropertyNames - show all poprierties
console.log('getOwnPropertyNames -> ', Object.getOwnPropertyNames(obj1))

// keys - show all enumerable poprierties
console.log('keys -> ', Object.keys(obj1))

// getOwnPropertyDescriptors- show all entries descriptors -- getOwnPropertyDescriptor(obj, prop) does the same to one property
console.log('getOwnPropertyDescriptors -> ', Object.getOwnPropertyDescriptors(obj1))


Object.isExtensible(obj1) // verify if new properties can be added
Object.isFrozen(obj1) // verify if the object cannot be changed anyway
Object.isSealed(obj1) // verify if current properties can be changed
Object.preventExtensions(obj1) // new properties cannot be added
Object.freeze(obj1) // properties cannot be changed anyway
Object.seal(obj2) // properties can't be deleted or configured, bur are still writable
