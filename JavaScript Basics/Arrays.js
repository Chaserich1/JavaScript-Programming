/***************************************************************************
 * Arrays
*/

//Initialize new arrays
var names = ['Chase', 'John', 'Jane']; //far more used
var years = new Array(1990, 1995, 1948);

//Log elements of the array
console.log(names[1]); //logs John
console.log(names); //logs the entire array
console.log(names.length); //logs 3

//Mutate Array data
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names); //Array(6) [ "Chase", "Ben", "Jane", <2 empty slots>, "Mary" ]

names[names.length] = 'Joe'; //Adds as the last element of the array
console.log(names); //Array(7) [ "Chase", "Ben", "Jane", <2 empty slots>, "Mary", "Joe" ]

//Different data types
var chase = ['Chase', 'Richards', 1995, 'Programmer', false];

chase.push('blue'); //adds the element to the end of the array
console.log(chase); //[ "Chase", "Richards", 1995, "Programmer", false, "blue" ]

chase.unshift('Mr'); //Adds element to the beginning of the array
console.log(chase); //[ "Mr", "Chase", "Richards", 1995, "Programmer", false, "blue" ]

chase.pop(); //removes the last element
chase.pop();
console.log(chase); //[ "Mr", "Chase", "Richards", 1995, "Programmer" ]

chase.shift(); //removes first element
console.log(chase); //[ "Chase", "Richards", 1995, "Programmer" ]

console.log(chase.indexOf(1995)); //2
console.log(chase.indexOf(23)); //-1

var isDesigner = chase.indexOf('designer') === -1 ? 'Chase is not a designer' : 'Chase is a designer';
console.log(isDesigner); //Chase is not a designer

var isProgrammer = chase.indexOf('Programmer') === -1 ? 'Chase is not a Programmer' : 'Chase is a Programmer';
console.log(isProgrammer); //Chase is a Programmer


