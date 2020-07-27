/***************************************************************************
 * Basic Operators 
 */

//Math Operators
//Only have to change the year in one spot
var year, yearOfBirthChase, yearOfBirthJohn, ageChase, ageJohn;
year = 2018;
ageChase = 24;
ageJohn = 26;

yearOfBirthChase = year - ageChase;
yearOfBirthJohn = year - ageJohn;
console.log(yearOfBirthChase);
console.log(yearOfBirthJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//Logical Operators
var johnOlder = ageJohn > ageChase;
console.log(johnOlder);

//Typeof Operator
console.log(typeof year);
console.log(typeof(johnOlder));
console.log(typeof 'John is older than Chase');
var x;
console.log(typeof x);