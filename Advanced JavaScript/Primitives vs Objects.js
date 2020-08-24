/////////////////////////////
// Lecture: Primitives vs Objects

//Primitives - Value
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

//Objects - Reference
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1; //both just reference the same object (only 1 object)
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Chase',
    city: 'Saint Louis'
};

function change(a, b){
    a = 30;
    b.city = 'New York';
}

change(age, obj);

console.log(age);
console.log(obj.city);

