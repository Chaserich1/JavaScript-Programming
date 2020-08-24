///////////////////////////////////////////
// Lecture: Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
retirementUS(1995);

//or
retirement(66)(1995);

var retirementGermany = retirement(65);
retirementGermany(1995);

var retirementIceland = retirement(67);
retirementIceland(1995);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ' can you explain UX design?');
        } else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else{
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var jobJohn = interviewQuestion('designer');
jobJohn('John');
























