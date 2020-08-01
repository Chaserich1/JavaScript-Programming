/***************************************************************************
 * Coding Challenge 3: Build tip calculator
*/

//Initialize the bills and the 2 arrays
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var tipsArray= [];
var totalPaidArray = [];

//Fucntion to calculate the tips and add the values to both array for tips and total bills
function tipCalculator(bill){
    var tip;
    if(bill < 50){
        tip = (bill * .2);
    } else if(bill >= 50 && bill <= 200){
        tip = (bill * .15);
    } else{
        tip = (bill * .10);
    }

    tipsArray.push(tip);
    totalPaidArray.push(tip + bill);
}

//Pass the bills to the function
tipCalculator(bill1);
tipCalculator(bill2);
tipCalculator(bill3);

//Log the two arrays
console.log(tipsArray);
console.log(totalPaidArray);
