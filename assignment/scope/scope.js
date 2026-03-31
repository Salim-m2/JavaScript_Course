console.log("Scope and Scope Chain")

// Exercise
// 1. What will be the out and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

// Output - Bob
// Reason - This is because of variable shadowing, whereby when the variable in both scopes(inner and outer) are declared using the same name, the variable in the inner scope is used.

// 2. What is the mistake in this code?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// Assigning the variable num multiple values. Or rather calling the function add multiple times which keeps on accumulating the value of the total. Another problem is the use of global variable total

//  3. Create a function with a nested function and log a variable from the parent function.

function addToCart(){
    let message = 'Successfully added to cart!!'

    function theButtonToAdd(){
        let number = 3
        console.log(`${number} item(s) ${message}`)
    }
    theButtonToAdd()
}
addToCart()

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

// function theRemainingCredit(){
    
//     for (credit = 12; credit >= 0; credit){
//         console.log(`Your credit is ${credit}.`)
//         if(credit === 0){
//             console.log('You have used all of your credits. Continue interacting with the site to get more credits or switch to pro version of the site.')
//         }
//     }

//     console.log('Testing')
// }
// theRemainingCredit()

// If you declare a variable inside a loop using var, you can access it outside the loop but you cannot access the same variable when you declare it using let.

// 5. Write a function that tries to access a variable declared inside another function.

function greet(){
    const morning = 'Good morning'
    const evening = 'Good evening'
    const night = 'Good night'
}

function morningGreetings(){
    console.log(`${morning}`)
}

morningGreetings()

// 6. What will be the output and why?

console.log(a);
let a = 10; // ReferenceError: you cannot access a before initialization

// 

