///////////////////////////////////////
// Lecture: Hoisting

//Hoisting Works for function declarations
calculateAge(1965);

function calculateAge(year){
    console.log(2020 - year);
}

calculateAge(1995);


//Function expressions do not work with hoisting

//retirement(1978); //error

var retirement = function(year){
    console.log(65 - (2020 - year));
}

retirement(1995);


//Variable hoisting

console.log(age); //undefined, the variable is found but not defined at this point
var age = 25; //declared in variable object of global execution context
console.log(age);

function foo(){
    console.log(age); //undefined
    var age = 65; //declared in foo execution context
    console.log(age); //65
}

foo();
console.log(age); //25









