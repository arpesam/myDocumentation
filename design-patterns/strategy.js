// Used when you have two objects that has the same methods, but with different strategies. Ex. paying with credit card and boleto; 
// https://www.youtube.com/watch?v=SicL4fYCz8w&list=PLREW9ZuU80uTfmxo61-acnUYk3P_4plIF&index=4


function Fedex() {
  this.calculate = function () {
    return 2.45
  }
}

function UPS() {
  this.calculate = function () {
    return 1.50
  }
}

function USPS() {
  this.calculate = function () {
    return 5.65
  }
}

function Shipping() {

  this.company = null;

  this.setStrategy = function (company) {
    return this.company = company
  }

  this.calculate = function (package) {
    return this.company.calculate(package)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = {
  from: 'Alabama',
  to: 'Georgia',
  weight: 1.56
}

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log('Fedex: ', shipping.calculate(package))

shipping.setStrategy(ups)
console.log('ups: ', shipping.calculate(package))

shipping.setStrategy(usps)
console.log('usps: ', shipping.calculate(package))