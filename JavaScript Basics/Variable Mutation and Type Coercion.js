/***************************************************************************
* Variable and type coercion
*/

//Type Coercion
var firstName = 'Chase';
var age = 24;

//Age and isMarried is type coerced to a string for this example
console.log(firstName + ' is ' + age);
var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'Twenty four';
job = 'Programmer';

//Gives a pop-up window in the browser
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Prompts for the input of a value and we can store it in a variable
var lastName = prompt('What is his last name?');
console.log(lastName);