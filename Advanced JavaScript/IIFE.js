///////////////////////////////////////////
// Lecture: IIFE

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//IIFE - immediately invoked function expression
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//IIFE - immediately invoked function expression
//Just for data privacy not re-use
(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);