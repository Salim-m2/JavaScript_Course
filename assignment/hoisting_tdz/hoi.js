console.log("Hoisting and Temporal Dead Zone")
// Variable Hoisting

// Hoisting on variables declared using var
console.log(`The age is ${age}`) // The age is

var age;
age = 45

console.log(`The age is ${age}`) // The age is 45

// Hoisting on variables declared using let
console.log(`His age is ${hisAge}`)// Referance error: Cannot access hisAge before initialization
/*

This is the Temporal Dead Zone(TDZ)



*/
let hisAge;
hisAge = 34


console.log(`His age is ${hisAge}`) // His age is 34

// Hoisting on variables declared using const

console.log(`Her age is ${herAge}`) // Referance error: Cannot access hisAge before initialization

const herAge = 30

console.log(`Her age is ${herAge}`) // Her age is 30

// Function Hoisting - The standard function can be call/invoked before defining it.

greet()

function greet(){
    console.log('How are you doing today?')
}

