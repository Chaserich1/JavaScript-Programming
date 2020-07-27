/***************************************************************************
* Operator precedence
*/

var now = 2020;
var yearChase = 1995;
var fullAge = 21;

//Multiple Operators
var isFullAge = now - yearChase >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageChase = now - yearChase;
var ageJohn = 35;
var average = (ageChase + ageJohn) / 2; //30
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More Operators
x *= 2; //x = x * 2
console.log(x);
x++; //x + 1
