
/***************************************************************************
 * Coding Challenge 5: Advanced Tip Calculator
*/

var tipCalculatorJohn = {
    billsArray: [124, 48, 268, 180, 42],
    tipsArray:[],
    totalBillsArr: [],
    tipCalculator: function(){
        for(var i = 0; i < this.billsArray.length; i++){
            var tipAmount = 0;
            var totalBillAmount = 0;
            if(this.billsArray[i] < 50){
                tipAmount = this.billsArray[i] * .20;
            } else if(this.billsArray[i] >= 50 && this.billsArray[i] < 200){
                tipAmount = this.billsArray[i] * .15;
            } else if(this.billsArray[i] >= 200){
                tipAmount = this.billsArray[i] * .10;
            } else{
                console.log('Invalid bill amount.');
            }
            
            totalBillAmount = this.billsArray[i] + tipAmount;
            this.tipsArray.push(tipAmount);
            this.totalBillsArr.push(totalBillAmount);
        }
    }
};

tipCalculatorJohn.tipCalculator();
console.log(tipCalculatorJohn.tipsArray);
console.log(tipCalculatorJohn.totalBillsArr);


/***************************************************************************
 * Coding Challenge 5 Part 2: Advanced Tip Calculator
*/

var tipCalculatorMark = {
    billsArray: [77, 375, 110, 45],
    tipsArray:[],
    totalBillsArr: [],
    tipCalculator: function(){
        for(var i = 0; i < this.billsArray.length; i++){
            var tipAmount = 0;
            var totalBillAmount = 0;
            if(this.billsArray[i] < 100){
                tipAmount = this.billsArray[i] * .20;
            } else if(this.billsArray[i] >= 100 && this.billsArray[i] < 300){
                tipAmount = this.billsArray[i] * .10;
            } else if(this.billsArray[i] >= 300){
                tipAmount = this.billsArray[i] * .25;
            } else{
                console.log('Invalid bill amount.');
            }
            totalBillAmount = this.billsArray[i] + tipAmount;
            this.tipsArray.push(tipAmount);
            this.totalBillsArr.push(totalBillAmount);
        }
    }
};

tipCalculatorMark.tipCalculator();
console.log(tipCalculatorMark.tipsArray);
console.log(tipCalculatorMark.totalBillsArr);

function calcAvg(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
}

var johnAvgTip = calcAvg(tipCalculatorJohn.tipsArray);
var markAvgTip = calcAvg(tipCalculatorMark.tipsArray);

if(johnAvgTip > markAvgTip){
    console.log('Johns family paid the highest tips on average.');
} else if(johnAvgTip < markAvgTip){
    console.log('Marks family paid the highest tips on average.');
} else{
    console.log('The families had the same average tips.');
}