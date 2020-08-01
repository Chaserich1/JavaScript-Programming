/***************************************************************************
 * Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
//These are converted to false when evaluated in if-else

// truthy values: NOT falsy values
//These are converted to true when evaluated in if-else

var height;
//Height is currently undefined which is a falsy value
if(height){
    console.log('The variable is defined.');
}else {
    console.log('The variable has not been defined.');
}

//Height is now defined which is NOT a falsy value so a truthy
height = 23;
if(height){
    console.log('The variable is defined.');
}else {
    console.log('The variable has not been defined.');
}

//Height is now 0 which is a falsy value so add or condition to show it's defined as 0
height = 0;
if(height || height === 0){
    console.log('The variable is defined.');
}else {
    console.log('The variable has not been defined.');
}

//Equality operators
// == data types do not have to match - it does type coersion
// === data types have to match - best practice
height = 23;
if(height == '23'){
    console.log('The == does type coersion.')
}

if(height === '23'){
    console.log('The === does do type coersion.')
} else{
    console.log('The === does not do type coersion.')
}