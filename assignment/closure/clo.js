console.log("Closure.")

// Examples

// Counter

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
const getButton = document.getElementById('countbutton')
const getCart = document.getElementById('cart')
const getMessage = document.getElementById('message')

console.log(getButton)
function count(){
    let counter = 0

    getButton.addEventListener('click', () => {
        counter++
        console.log(`You have clicked ${counter} times`)
        getMessage.innerText = `${counter} Items successfully added to cart`
        getCart.innerText = `${counter}`
    })
}
count()

// Bank Statement

function userBankAccount(initialbalance){
    let balance = initialbalance
    balance = 10000
    return{
        deposit: (amount) =>{
            balance += amount
            console.log(`You have deposited ${amount} and your balance is ${balance}.`)
        },
        withdraw: (amount) =>{
            if(amount > balance){
                console.log(`You have insufficient funds in your account to widthdraw ${amount}. Please check your account balance and try withdrawing again.`)
            }
            else{
                balance -= amount
                console.log(`You have withdrawn ${amount} and your balance is ${balance}`)
            } 
        },
        accountbalance: () => console.log(`Your account balance is ${balance}`)
    }
}

const retVal = userBankAccount()

console.log(retVal.deposit(20000))
console.log(retVal.deposit(50000))
console.log(retVal.withdraw(80000))
console.log(retVal.accountbalance())

// 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

function createMultiplier(multiplier){
    let num = multiplier
    num = 3

    return function multiplyNumber(number){
        num = num * number
        console.log(num)
    }
}

let result = createMultiplier()

result(3) // 9
result(3) // 27
result(3) // 81

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterAgain(initialvalue){
    let firstValue = initialvalue

    firstValue = 0

    return{
        increment: (value) =>{
            firstValue += value
            console.log(`The value has been icreased by ${value} and now it is ${firstValue}`)
        },
        decrement: (value) =>{
            firstValue -= value
            console.log(`The value has been decreased by ${value} and now it is ${firstValue}`)
        },
        reset: () =>{
            firstValue = 0
            console.log(`The value has been reset to ${firstValue}`)
        }
    }
}

const output = counterAgain()

console.log(output.increment(10))
console.log(output.increment(20))
console.log(output.increment(30))
console.log(output.increment(40))
console.log(output.decrement(10))
console.log(output.reset())
console.log(output.increment(10))
console.log(output.decrement(20))
console.log(output.increment(1000))
console.log(output.reset())