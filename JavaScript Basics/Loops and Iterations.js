/***************************************************************************
 * Loops and Iteration
*/

//for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}

var chase = ['Chase', 'Richards', 1995, 'programmer', false];

//console.log(chase[0]);
for(var i = 0; i < chase.length; i++){
    console.log(chase[i]);
}

//while loop
var i = 0;
while(i < chase.length){
    console.log(chase[i]);
    i++;
}

//Continue and break statements
var chase = ['Chase', 'Richards', 1995, 'programmer', false];

//continue
for(var i = 0; i < chase.length; i++){
    if(typeof chase[i] !== 'string') continue;
    console.log(chase[i]);
}

//break
for(var i = 0; i < chase.length; i++){
    if(typeof chase[i] !== 'string') break;
    console.log(chase[i]);
}

console.log('===================')
//Loop through chase array backwards
for(var i = chase.length - 1; i >= 0; i--){
    console.log(chase[i]);
}