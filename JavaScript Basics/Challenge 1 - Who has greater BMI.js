/***************************************************************************
 * Coding Challenge 1: Does Mark have a higher BMI than John?
*/

//Store the masses and heights in variable
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 40;
heightMark = 5;
massJohn = 60;
heightJohn = 5;

//Calculate the BMIs
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

//Create boolean to determine if Mark has a higher BMI than John
var markHigherBMI = bmiMark > bmiJohn;

//Print string to console saying the results
if(markHigherBMI){
    console.log('Mark has a higher BMI than John');
} else {
    console.log('John has a higher BMI than Mark')
}