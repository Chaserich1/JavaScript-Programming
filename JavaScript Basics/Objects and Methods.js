/***************************************************************************
 * Objects and Methods: only objs have methods so an array is an obj
*/

//Add age calculation method because it changes every year, we wouldn't want it hard coded
var chase = {
    firstName: 'Chase',
    lastName: 'Richards',
    birthYear: 1995,
    family: ['John', 'David', 'Sarah'],
    job: 'Programmer',
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

chase.calcAge();
//console.log(chase.calcAge(chase.birthYear));
console.log(chase);






