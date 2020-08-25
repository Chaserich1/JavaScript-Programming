///////////////////////////////////////////
// Lecture: Bind, Call and Apply


var chase = {
    name: 'Chase',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly'){
            console.log('Hey what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

chase.presentation('formal', 'morning');
chase.presentation('friendly', 'night');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//Method Borrowing
chase.presentation.call(emily, 'friendly', 'afternoon');

//Won't work because function doesn't expect an array
//chase.presentation.apply(emily, ['friendly', 'afternoon']);

//Bind generates a copy of the function to be stored somewhere. Currying: Lets you preset some arguments
var chaseFriendly = chase.presentation.bind(chase, 'friendly');
chaseFriendly('midday');
chaseFriendly('midnight');

var emilyFormal = chase.presentation.bind(emily, 'formal');
emilyFormal('night');





var years = [1995, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);





































