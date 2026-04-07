console.log('Error Handling')


// The try...catch syntax

try{
     
    console.log('Execution Starts here')
    console.log(x) //ReferenceError
    console.log('Execution Ends here')
}catch(error){
    console.error(error)
}

try{
    let x = 123 
    console.log('Execution Starts here')
    console.log(x.tolowerCase()) //TypeError
    console.log('Execution Ends here')
}catch(error){
    console.error(error)
}

try{
    let x = new Array(-1) 
    console.log('Execution Starts here')
    console.log(x) //RangeError
    console.log('Execution Ends here')
}catch(error){
    console.error(error)
}

// The information of the error property

// error.message - gives the message of the error.
try{
    console.log('Execution Starts here')
    console.log(x) //ReferenceError
    console.log('Execution Ends here')
}catch(error){
    console.error(error.message)
}

// error.name - gives the name of the error that has occured

try{
     
    console.log('Execution Starts here')
    console.log(x) //ReferenceError
    console.log('Execution Ends here')
}catch(error){
    console.error(error.name)
}

// error.stack - gives the sequence that has resulted to a particular error. It very useful when debbuging.

try{
     
    console.log('Execution Starts here')
    console.log(x) //ReferenceError
    console.log('Execution Ends here')
}catch(error){
    console.error(error.stack)
}

// Throwing Custom Errors

function userInfo(email, password){
    let char = '/!.,!@#$%^&*'
    try{
        if(!email.includes('@')) {
         const emailError = new Error(`The email must contain @, Your email is ${email}`)
         throw emailError
        }
        if(password.length < 6 || !password.includes(char)){
          const passError = new Error('The password is too weak, it must have atleast 6 characters with atleast one special character.')
          throw passError
        }

        console.log('Account successfully created.')
    }catch(error){
        console.error(`ValidationError: ${error.message}`)
    }
    }
userInfo('johndoe123gmail.com', 'johndoe')    

// Rethrowing Custom Errors

// function creatAccount(name, password, amount){
//     let balance = amount
//     let char = '/!.,!@#$%^&*'
//     try {
//         if(name.length < 2) throw new Error(`The name cannot be less than two characters. You entered ${name}`)
        
//         // if(password.length < 6 || !password.includes(char)) throw new Error('The password is too weak, it must have atleast 6 characters with atleast one special character.')
//         if(amount < 1000) throw new Error(`You cannot create an account with amount less than 1000.`)

//         console.log(`Account Created Successfully. Your balance is ${balance}`)
//     } catch (error) {
//         console.log(error.message)
//         throw error // The rethrown error is caught outside this block furthur up the callstack
//     }
// }
// creatAccount('Salim', 'johndoe#', 900)


// Custom Errors - Is the user-defined error class/object that extends the built-in error.

// Creating a custom error using constructor function.

function ValidationError(message, field){
    this.name = 'ValidationError';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack;
}

// Inherit from Error's Prototype
ValidationError.prototype = Object.create(Error.prototype)
ValidationError.prototype.constructor = ValidationError


// Using the custom error

function validatAge(age){
    if(typeof age !== 'number'){
        throw new ValidationError('The age must be a number', 'age')
    }
    if(age < 0 || age > 130){
        throw new ValidationError('The age is not within the limit', 'age')
    }
    console.log('The age is within the range limit')
}

try {
    validatAge(20)
} catch (error) {
    if(error instanceof ValidationError){
        console.error(error.name) // ValidationError
        console.error(error.message) // The error message
        console.error(error.field) // the field
    }else{
        throw error; // re-throw an error
    }
}
// Exercise.

// ## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount){
    let balance = 1000
    if(amount < 0){
        throw new Error('The amount cannot be less than zero')
    }
    if(amount > balance){
        throw new Error('The amount cannot be more than balance.')
    }

    return `Your amount is ${amount}`
}

try {
  
    const message =   processPayment(10000)
    console.log(message)
} catch (error) {
    console.error(error.name)
    console.error(error.message)
}


// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

// UserError
// PaymentError
// ServerError
// EmailError

// UserError
function UserError(message, field){
    this.name = 'UserError';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack
}

// Inherit from the Error's Prototype
UserError.prototype = Object.create(Error.prototype)
UserError.prototype.constructor = UserError


//PaymentError
function PaymenError(message, field){
    this.name = 'PaymenError';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack;
}

// Inherit from Error's prototype
PaymenError.prototype = Object.create(Error.prototype)
PaymenError.prototype.constructor = PaymenError

// ServerError
function ServerError(message, field){
    this.name = 'ServerError';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack
}

// Inherit from the Error's prototype
ServerError.prototype = Object.create(Error.prototype)
ServerError.prototype.constructor = ServerError

// EmailError
function EmailError(message, field){
    this.name = 'EmailError';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack;
}

// Inherit from the Error's PRototype
EmailError.prototype = Object.create(Error.prototype)
EmailError.prototype.constructor = EmailError


// Using the Errors

// UserError
function userInfo2(name, input){
    if(name.length < 2){
        throw new UserError('The username cannot of length less than two', 'name')
    }
    if(!input || input === ''){
        throw new UserError('The field cannot be empty. Please fill in all the details', 'input')
    }

    return 'Thank you for the feedback.'
}

try {
    const theInputs = userInfo2('Salim', '')
    console.log(theInputs)
} catch (error) {
    if(error instanceof UserError){
        console.error(error.name)
        console.error(error.message)
        console.error(error.field)
    }else{
        throw error
    }
}

// PaymentError

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url){
    if(!url.startsWith("https")){
        throw new Error('The API address must start with https')
    }
    return 'The API'
}

try {
    const API = fetchData('http://salim.api.com')
    console.log(API)
} catch (error) {
    console.error(error.message)
}

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

// Creating the custom error
function ValidationError1(message,field){
    this.name = 'ValidationError!';
    this.message = message;
    this.field = field;
    this.stack = (new Error()).stack;
}

// Inherit from the Error's prototype

ValidationError1.prototype = Object.create(Error.prototype)
ValidationError1.prototype.constructor = ValidationError1

// Using the Error

function validateUser(username, age){
    if(username === ''){
        throw new ValidationError1('ValidationError: Username cannot be empty.', 'username')
    }
    if(age < 0){
        throw new ValidationError1('ValidationError: Age must be a postive number.', 'age')
    }
}

try {
    const userInput = {username: 'Sally', age: -2}
    validateUser(userInput.username, userInput.age)
    
} catch (error) {
    if(error instanceof ValidationError1){
        console.log(error.message)
    }else{
        throw error;
    }
}

