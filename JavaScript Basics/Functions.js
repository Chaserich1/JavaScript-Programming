/***************************************************************************
 * Functions
*/

function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageChase = calculateAge(1995);
var ageDavid = calculateAge(1997);
var ageJohn = calculateAge(1993);
console.log(ageChase, ageDavid, ageJohn);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else{
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1995, 'Chase');
yearsUntilRetirement(1997, 'David');
yearsUntilRetirement(1993, 'John');

