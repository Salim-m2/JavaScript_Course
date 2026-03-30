console.log("Interview Preparation...")

console.log("Functions...")

let printMe = function(){
    console.log("Printing...")
}

console.log(printMe)

printMe()

// Return statement - used to give a value that can be used to perform perticular tasks on it

let operator = '-';
function sum(a , b){
    if(operator === '+'){
        const result = a + b 
        return result
    }
    else if(operator === '*') {
        const result = a * b 
        return result
   }

    else if(operator === '-') {
        const result = a - b 
        return result
   }
   
    else if(operator === '/') {
        const result = a / b 
        return result
   }

    else{
        console.log("Wrong Arithmetic Operator!!")
   }
}
let result = sum(20, 80)
console.log(result)

function multiply(num){
    let product = num * result
    return product
}

console.log(multiply(result))

// callback fuction - is a function that is passed to another function as an argument and excuted based on certain condition

function foo(buzz){
    console.log('The callback function is my argument.')
    buzz()
}
const callBack = function(){
    console.log('I am the callback function.')
}

foo(callBack)

// HOF - a function that takes another function as argument and can return a function from it

function returnFunc(){
    return function(){
        console.log("I'm the high order function...")
    }
}

const returnHOF = returnFunc()
returnHOF()

// recursion - is all about the function calling itself, you need an need an exit criteria or base condition while using this type of function

// function foo(){
//     // console.log("Fetching water...")

//     foo()
// }

function fetchWater(count){
    console.log(`Fetching water... ${count}`)
    if(count === 0){
        console.log('No more water is left to fetch....')
        return
    }
    fetchWater( count - 1)
}

fetchWater(6)


function greet(name, callback){
    console.log(`${callback}`)
    name()
}

let theName = function(){
    console.log('Salim!')
}

greet(theName, 'Good Morning')