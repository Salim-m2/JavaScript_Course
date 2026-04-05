"use strict"

console.log('The this keyword')


// this keyword in global scope
console.log(this) // the value is the window object

// this keyword inside an object

const person = {
    name: 'Salim',
    address: '123 Streat name Nairobi',

    value: function theValueOfThis(){
        console.log(this)
    }
}

person.value()

// this inside a function

function thisInsideFunction(){
    console.log(this)
}

thisInsideFunction()

// this inside a nested function

function insideNestedFunction(){
    function inner(){
        console.log(this)
    }
    inner()
}
insideNestedFunction()

// this inside an arrow function

let arrowFunc = () => console.log(this)
arrowFunc()

// this inside an arrow function in an object

let employee = {
    name: 'Salim',
    department: 'HR',
    address: '124 Street Nairobi',
    value: function(){
         return () => console.log(this)
    }
   
}
let getValue = employee.value()

getValue()


// Exercise

// ## 2. What is the problem here? Fix it to log the correct name and explain the fix

    // const user = {
    // name: "tapaScript",
    // greet: () => {
    //     console.log(`Hello, ${this.name}!`);
    // },
    // };

    // user.greet();

// The value of this in an arrow fuction will always refer to a parent of a scope in which an arrow function is defined. And since the parent scope of user object is global scope, the this refers to a global scope. And as from observation, there is no a variable called name in a global scope. Therefore resulting to this.name being undefined.


// The fix

const user = {
  name: "tapaScript",
  greet: function(){
        return () => {
        console.log(`Hello, ${this.name}!`);
        }
    }
};

const getUser = user.greet();
getUser()



// ## 3. Can you explain what is the problem here and fix the issue to log the correct name?

        // const obj = {
        //   name: "Tom",
        //   greet: function () {
        //     console.log(`Hello, ${this.name}!`);
        //   },
        // };

        // const greetFn = obj.greet;
        // greetFn();

// The problem is that we are actually trying to use the name property in an object obj without implicity binding the function greet to an object obj therefore resulting to this.name being undfined.

// The fix.

// The solution to this is binding the method greet to object obj by using the parethesis () when calling the method greet

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet();
greetFn;

// ## 4. What is the problem with the following code? Why isn't it logging the name correctly?
        // const userAgain = {
        //   name: "Alex",
        //   greet: function () {
        //     function inner() {
        //       console.log(`Hello, ${this.name}!`);
        //     }
        //     inner();
        //   },
        // };

        // userAgain.greet();

// The function inner() is a stand alone function that the value of this a stand alone function in an unstricted mode is the window object but in strict mode is undefined. Therefore this.name is undefined in both cases since there is no variable called name in a global scope.

// Here the solution i will use is to change the inner function into an arrow function. i.e

const userAgain = {
  name: "Alex",
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    }
  }
};

let get = userAgain.greet();
get()


// ## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

function Sports(name, number){
    this.name = name,
    this.number = number
}

const sport1 = new Sports('Football', 22)

const sport2 = new Sports('Basketball', 20)

console.log(sport1)
console.log(sport2)


// ## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2)

car2.describe
car1.describe()

// ## 7. What will be the output of the following code and why?
const person1 = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);// Charlie - The value of this in a method inside an object refer to the object. Therefore this.name is Charlie.
  },
  sayHelloArrow: () => {
    console.log(this.name);// Empty - The value of this in arrow function refers to a scope of the parent scope in which this function is defined. In this case the value of this refers to a global scope and since there is no name variable in a global scope the output is an empty string.
  },
};

person1.sayHello();
person1.sayHelloArrow();