/***************************************************************************
 * The ternary operator and switch statements
*/

//Ternary Operator
var firstName = 'Chase';
var age = 16;

age >= 21 ? console.log(firstName + ' Drinks Beer') : console.log(firstName + ' Drinks Soda');

var drink = age >= 18 ? 'beer' : 'soda';
console.log(drink);

//Switch statement
var job = 'teacher';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' is a teacher.');
        break;
    case 'chef':
        console.log(firstName + ' is a chef.');
        break;
    case 'athlete':
        console.log(firstName + ' is an athlete.');
        break;
    default:
        console.log(firstName + ' does not have a job.');
}

//Switch on ages
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <= 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
    default:
        console.log(firstName + ' is a man.');
}