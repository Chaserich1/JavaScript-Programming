/*
 - Every JavaScript object has a prototype property, which makes inheritance possible
    in JavaScript
 - The prototype property of an object is where we put methods and properties that we
    want other objects to inherit
 - The Constuctor's prototype property is not the prototype of the Constructor itself,
    it's the prototype of ALL the instances that are created through it
 - When a certain method (or property) is called, the search starts in the object itself,
    and if it cannot be found, the search moves on to the object's prototype. This continues
    until the method is found: prototype chain.*/
/////////////////////////////
// Lecture: Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function(){
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith'; //Inherited for all of them

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);















