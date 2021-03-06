// Used when is necessary to create a lot of objects having the same atributes
// https://www.youtube.com/watch?v=kuirGzhGhyw&list=PLREW9ZuU80uTfmxo61-acnUYk3P_4plIF&index=2

function Developer(name) {
  this.name = name
  this.type = 'Developer'
}

function Tester(name) {
  this.name = name
  this.type = 'Tester'
}

function EmployeeFactory() {
  this.create = function(name, type) {
    switch (type) {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('Pratrick', 1))
employees.push(employeeFactory.create('John', 2))
employees.push(employeeFactory.create('Doe', 1))
employees.push(employeeFactory.create('Jane', 2))

employees.forEach(function(emp) {
  say.call(emp)
})
