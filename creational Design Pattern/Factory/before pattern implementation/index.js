var Employee = require('./Employee');
var Shopper = require('./Shopper')

var alex = new Shopper('Alex Banks', 100,);

var eve = new Employee('Eve Porcello', 100, 'employee','This and That');

eve.payDay(100)

console.log( alex.toString() )
console.log( eve.toString() )
