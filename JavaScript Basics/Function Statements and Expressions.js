/***************************************************************************
 * Function Statements and Expressions
*/
//Function Declaration
//function whatDoYouDo(job, firstName){}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' is a teacher';
        case 'driver':
            return firstName + ' is a driver';
        case 'designer':
            return firstName + ' is a designer';
        default:
            return firstName + ' is something else.';
    }
}

console.log(whatDoYouDo('teacher', 'Chase'));
console.log(whatDoYouDo('driver', 'David'));
console.log(whatDoYouDo('retired', 'John'));

