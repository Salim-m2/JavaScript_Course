// ## 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback){
    callback()
    console.log(`${name}`)
}

let callBack = () => console.log("Good Morning")

greet('Salim', callBack)

// ## 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function(language){
    console.log(`Hello ${language}`)
}('JavaScript!'))


