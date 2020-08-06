///////////////////////////////////////
// Lecture: The this keyword
// Regular function call: the this keyword points at the global object
// Method Call: the this variable points to the object that is calling the method

//This keyword is the window object
console.log(this);

calculateAge(1995);

function calculateAge(year){
    console.log(2020 - year);
    console.log(this); //This is the window object
}

//This keyword is the chase object now
var chase = {
    name: 'Chase',
    yearOfBirth: 1995,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this); //This keyword is now the window object because it is a regular function call here
        }

        innerFunction(); */
    }
};

chase.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//Method borrowing
mike.calculateAge = chase.calculateAge; //don't need () because we're not calling just assinging like a variable
mike.calculateAge(); //this variable becomes mike object as soon as this method is called


