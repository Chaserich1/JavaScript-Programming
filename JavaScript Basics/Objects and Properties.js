/***************************************************************************
 * Objects and Properties: in array order matters in obj it does not
*/

//Object literal syntax
var chase = {
    firstName: 'Chase',
    lastName: 'Richards',
    birthYear: 1995,
    family: ['John', 'David', 'Sarah'],
    job: 'Programmer',
    isMarried: false
};

console.log(chase);
console.log(chase.birthYear); //1995

console.log(chase['lastName']); //Richards

var x = 'job';
console.log(chase[x]);

//Mutate objects
chase.job = 'driver';
chase['isMarried'] = true;
console.log(chase);


//new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);