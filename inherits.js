var util = require('util');

class Person{
    constructor(){
        this.name = 'blue'
    }
    say(){
        console.log('hello');
    }
}

class Chid{}
util.inherits(Chid, Person);

new Chid().say();

console.log(Person === Person.prototype.constructor);


var obj={};
obj = Object.create(Person.prototype);
obj.say();
