/***************************************************************************
 * Coding Challenge 4: Calc BMI with methods
*/

//Mark object
var mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

//John object
var john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
var markBMI = mark.bmi;
var johnBMI = john.bmi;

if(johnBMI > markBMI){
    console.log(john.fullName + ' has a higher BMI of ' + johnBMI);
} else if(johnBMI < markBMI){
    console.log(mark.fullName + ' has a higher BMI of ' + markBMI);
} else{
    console.log(john.fullName + ' and ' + mark.fullName + ' have equal BMIs of ' + markBMI + ' and ' + johnBMI);
}