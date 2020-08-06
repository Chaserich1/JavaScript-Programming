///////////////////////////////////////
// Lecture: Scoping only way to define new scope is a function not loops
// lexical scoping: a function that is lexically in another function
//                  gets access to the scope of the outer function

var a = 'Hello! ';
first();

function first(){
    var b = 'Hi! ';
    second();

    function second(){
        var c = 'Hey! ';
        console.log(a + b + c);
        a = 'Yo!';
        //var a = 'CHello'; then a above would be undefined
    }
}

console.log(a); //Yo!
//console.log(b); //error



// Example to show the differece between execution stack and scope chain
// Execution Stack: order in which functions are called
// Scope Chain: order in which functions are written lexically

