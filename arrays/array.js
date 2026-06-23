console.log('Arrays') // The colection of elements of different types

// Creating an Array

// Using Literals.

const fruits = ['Banana', 'Cherry', 'Mango', 'Orange', 'Pineaapple', 'Kiwi']

console.log(fruits)

// Using Array Constructor Function

const vegs = new Array('Tomato', 'Kales', 'Spinach', 'Brocoli', 'Cabbage')

console.log(vegs)


const functionalReq = new Array()
functionalReq[0] = 'Login' 
functionalReq[1] = 'Register' 
functionalReq[2] = 'Logout' 
functionalReq[3] = 'Search' 
functionalReq[4] = 'Filter'
functionalReq[5] = 'Add to cart' 
functionalReq[6] = 'Apply Coupon'

console.log(functionalReq)

// Creating Arrays with differnt data types

const myArray = [14, 'Coding', {Name: 'Salim', Profession: 'Frontend Developer'}, () =>{console.log('I am a function in an array')}, ['Love', 'Joy', 'Peace', 1, {}], null, undefined, true]

console.log(myArray)

// Accessing Elements of array

// Using Index.

console.log(fruits[2]) // Mango

// Using loops

for(let i = 0; i <= myArray.length - 1; i++) console.log(myArray[i])

// add elements

const categories = ['Electronics', 'Kitchen', 'Cloths', 'Foot Wear', 'Stationeries']
//The for in loop to access all the elements of an array
for(let i in categories){
    console.log(i , categories[i])
}

// Add elements

// 1. push() - add at the end of an array

categories.push('Bedroom')

console.log(categories)

// 2. unshift() - add at the beginning of an array.

categories.unshift('Beverages')

console.log(categories)

// Removing elements from an array

// 1. pop() - remove from the end.
console.log(categories.pop()) // Returns the removed element

// 2. shift() - remove from the beginning.
console.log(categories.shift()) //Returns the removed element

console.log(categories)

// Copy and clone array - use slice() method or spread operator

// 1. slice() - method is the immutable array- Returns a totally new array.

const design = ['Ceiling', 'Kitchen', 'Bedroom', 'Sitting Room', 'Washroom', 'Dinning', 'Balcony']

const copyDesign = design.slice()

console.log(design)
console.log(copyDesign)
console.log("Design is same as copyDesign:",  design === copyDesign)

// 2. Using Spread operator

const cloneDesign = [...design]

console.log(cloneDesign)

console.log("CloneDesign is equal to Design:", cloneDesign === design)

// Array Destructuring - used in accessing the elements of arrays by assign them to new varibles.

const [design1, design2, design3, , ,design6, design7] = ['Ceiling', 'Kitchen', 'Bedroom', 'Sitting room', 'washroom', 'Dinning', 'Balcony'] // Here we have also skipped some elements during destructuring.

console.log(design1)
console.log(design2)
console.log(design3)
console.log(design6)
console.log(design7)

// Using rest parameter.

const[day1 , day2, day3, ...rest] = ['Ceiling', 'Kitchen', 'Bedroom', 'Sitting room', 'washroom', 'Dinning', 'Balcony'] // Assign the first 3 elements to the given varibales and the remaining will be returned as array.

console.log(day1)
console.log(day3)
console.log(rest)

// Other usses of array destructuring. 

// 1. swapping

let drink1 = 'Tea';

let drink2 = 'Coffee';

[drink1, drink2] = [drink2, drink1]

console.log(drink1)
console.log(drink2)

// 2. Merging - Merges the arrays into one array- Using spread operator

const maleOutfits = ['Trousers', 'Belt', 'Cape', 'Boxers']

const femaleOutfits = ['Skirts', 'Blouse', 'Thogs', 'Heels']

const outfits = [...maleOutfits, ...femaleOutfits]

console.log(outfits)

// Array Methods

// They are: 

// concat(), join() , fill(), indexOf(), lastIndexOf(), sort(), splice(), reverse(), includes(), at(), flat()

// 1. concat() - Used to join two or more arrays into one. It is immutable

const products = ['Footware', 'Clothes', 'Sneakers', 'Electronics', 'Motors']

const price = [2345, 678, 890, 456, 987]

const customers = ['John', 'Doe', 'Sally', 'Kane']

const orders = products.concat(price, price, customers)

console.log(products)
console.log(price)
console.log(customers)
console.log(orders)

// 2. join() - As the name suggest, this method joins all the elements of array together using separator and returns string. The default separator is comma

console.log(products.join(" <> "))

// 3. fill() - replaces the elements of array with a static value. You can specify the starting point(starting index) and the ending point(the ending length)

const cars = ['BMW', 'Audi', 'Ferrar', 'Lamboghini', 'Volvo', 'Toyoto']

cars.fill('Tesla', 2, 5)

console.log(cars)

// 4. includes() - checks whether a particular elements exists in an array. Returns a boolean value depending on the results.

const event = ['Artists', 'Musics', 'Photographers', 'Video Editors', 'Choreographer', 'MC', 'DJ', 'Photographers']

console.log(event.includes('Musics'))
console.log(event.includes('guests'))

// 5. indexOf() - returns the index of the first occurence of an element in an array

console.log("The index of the first Photographers:", event.indexOf('Photographers'))

// 6. lastIndexOf() - returns the index of the last occurence of an element in an array.

console.log("The index of the first Photographers:", event.lastIndexOf('Photographers'))

// at() - Used to access the elements of an array. They accept both -ve and +ve indexs

console.log(event.at(-1)) // Returns the first element from the end
console.log(event.at(-4)) // Returns the forth element from the end
console.log(event.at(3)) //  Returns the forth element from the beginning

// 7. reverse() - Reverses the elemnts of an array. The last becomes the first and vice versa.

const time = [10, 11, 12, 13, 14, 15, 16, 17]
console.log(time)
console.log(time.reverse())

// 8. copyWithhin(): Copy the elements from one position to another within array. Syntax: copyWithin(target, start, end) 

const positions = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(positions)

console.log(positions.copyWithin(1, 4, 7))

// 9. flat() - flattens the nested array. The default is only first level. Allows the parameters. The parameter 'infinity' flattens the whole nested array.

const students = ['Ken', 'Jack', 'Mark', 'Vinh', 'Sam', [12, 16, 17 ,15, 17]]

console.log(students)
console.log(students.flat())

const students1 = ['Ken', 'Jack', 'Mark', 'Vinh', 'Sam', [12, 16, 17 ,15, 17, ['Kenya', 'Uganda', 'Tanzania', 'USA', 'Europe'], ['Local', 'Regional', 'Regional', 'International', 'International']]]

console.log(students1)
console.log(students[5].flat())
console.log(students1.flat(Infinity))

// 10. sort() - arrange the elements of an array in ascending order by default. The method first convers the elements into an array. You can use the comparator function to arrange/sort the elements in descending order.

const services = ['Kitchen Installation', 'Polycarbonate Installation', 'Ceiling', 'Carbinate', 'Wardrope', 'Lighting', 'Space Planning']

console.log(services)
console.log(services.sort())

// Using the Comparator function to sort in descending order.

services.sort(function(a, b){
    return a === b ? 0 : a > b ? -1 : 1 
})

console.log(services)

const numbers = [2, 5, 7, 8, 200, 100, 300, 2000, 1000, 6000]
console.log(numbers)
console.log(numbers.sort()) // Since the numbers are converted into strings you can tell whether they are correctly sorted so we have to use comparitor function to sort the numbers correctly both in ascending and descending order.

numbers.sort((a, b) => a === b ? 0 : a > b ? -1 : 1) // Descending order
console.log(numbers)

numbers.sort((a, b) => a === b ? 0 : a > b ? 1 : -1) // sort numbers in ascending order
console.log(numbers)

// 11. splice() - It is multipurpose array method which deletes, adds, modifies elements of an array. Syntax: splice(start, deleteCount, item1, item2, ..., item_n)

const success = ['God', 'Communication', 'Skills', 'Commitment', 'Strategy', 'Relationships']

console.log(success)

success.splice(1, 0, 'Believe', 'Motivation', 'Consistency') // The 3 items starting from index 1 and remove none from the array.
console.log(success)

success.splice(2, 1) //Remove one element starting from index 2

console.log(success)

// Immutability

// The following methods: toSorted(), toSpliced(), toReversed(), with()

// The above method work the same as sorted(), spliced(), reverved() respectively. The only difference is that the above are immutatable. with() - is used to replace the element of an array. It has the following syntax: with(index, value) where index is the position of an element you want to change and value is the value you want to replace.

// Static Array Methods

// Array Like - are the objects that posses some array properties like the elements array have index and also the objects themselves have the length property

const arrLike = document.getElementsByTagName('li') // This is array like

console.log(arrLike)

console.log("The length of Array Like", arrLike.length) // Has Length Property

console.log("Access Elements using index", arrLike[3]) // Elements can be accessed using index

// arrLike.forEach((item) => console.log(item)) // This method is not allowed because this is just array like but not array

// Dealing with Array like 

// Converting an array like to array


// These Methods are used: Array.from(), Array.fromAsync(), Spread Operator

// 1. Using Spread Operator

function conArrLike(){
    console.log(arguments)

    const myArr = [...arguments]; // Convert array like to an array

    console.log(myArr)

    // Now apply the array methods for the converted array like
    myArr.forEach((elem) => console.log(elem))
}
conArrLike(arrLike)

// 2. Using Array.from() - returns an array

const convToArray = Array.from(arrLike)
console.log(convToArray)

// Using the usual array methods on the the converted array like

convToArray.forEach((items) => console.log(items))

const applyToSpliced = convToArray.toSpliced(3, 0, document.createElement('li'))

console.log(applyToSpliced)

applyToSpliced.forEach((items) => console.log(items))

// 3. Using Array.fromAsync() - This returns a promise that you can handle using .then(), .catch() or .finally()

console.log(Array.fromAsync(arrLike))

// Array Iterator Methods 

// They include: filter(), map(), reduce(), reduceRight(), some(), every(), find(), findLast(), findIndex(), findLastIndex(), forEach(), entries(), values(), flatMap()

// We will use this array to understand how each one of them works

const customerss = [
    {
        "id": 102,
        "f_name" : "John",
        "l_name" : "Doe",
        "gender" : "M",
        "married" : true,
        "age" : 50,
        "expense" : 320,
        "purchased" : ['Clothes', 'Books', 'Electronics']
    },
        {
        "id": 103,
        "f_name" : "Jane",
        "l_name" : "Doe",
        "gender" : "F",
        "married" : true,
        "age" : 48,
        "expense" : 500,
        "purchased" : ['Clothes', 'Books', 'Shoes', 'Makeups']
    },
        {
        "id": 104,
        "f_name" : "Babu",
        "l_name" : "Mzae",
        "gender" : "M",
        "married" : true,
        "age" : 65,
        "expense" : 700,
        "purchased" : ['Magazines', 'Wine', 'Books']
    },
        {
        "id": 105,
        "f_name" : "Johnny",
        "l_name" : "Kazi",
        "gender" : "M",
        "married" : true,
        "age" : 28,
        "expense" : 1000,
        "purchased" : ['Sneakers', 'Phone', 'Pods']
    },
        {
        "id": 106,
        "f_name" : "Mary",
        "l_name" : "Cutie",
        "gender" : "F",
        "married" : true,
        "age" : 24,
        "expense" : 1220,
        "purchased" : ['Clothes', 'Books', 'Makeups', 'Furniture']
    },
        {
        "id": 107,
        "f_name" : "Hope",
        "l_name" : "Smile",
        "gender" : "F",
        "married" : false,
        "age" : 7,
        "expense" : 220,
        "purchased" : ['Toys', 'Ice Cream', 'Balloon']
    },
];

console.log(customerss);

// 1. filter() - This one uses a TEst Function. It passes this function to every element of an array and returns the array of elements that pass the Test

// Get the senior citezen by filtering out customers

const seniorCitizen = customerss.filter((element) => element.age >= 60);
console.log("The Senior Citezen", seniorCitizen);

// Also Get All the married customers

const marriedCustomers = customerss.filter((element) => element.married);

console.log("The married customers" ,marriedCustomers);

// 2. map() - takes a transformation function. It pass this function to each element of an array and transforms it accordin to the logic

// Transform to add the title and the full name

const titleAndFullName = customerss.map((customer) => {
    let title = '';

    if(customer.gender === 'M'){
        title = "Mr.";
    }
    else if(customer.gender === 'F' && customer.married){
        title = "Mrs.";
    }
    else{
        title = "Miss";
    }
    customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;
    
    return customer;
})

console.log(titleAndFullName)

// 3. reduce() - It takes a reducer function and reduce the value of array elements to a single value.

// Syntax

// const ret = arr.reduce((accumulator, currentValue, index, array) =>{
//     // Do something
// }, initialValue)

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arrayNum.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
}, 0);

console.log("The sum of 1 to 10: ", sum);

// Average age of customers who purchased a book
let count = 0;
const aveAgePurchasedBook = customerss.reduce((accumulator, customer) =>{

    if(customer.purchased.includes('Books')){
       accumulator = accumulator + customer.age;
       count = count + 1;
    }

    return accumulator;
    
}, 0)

console.log("The average age of customers who purchased book", Math.floor(aveAgePurchasedBook / count));


// 4. reduceRight() - has the same function as reduce but it starts from the right to left

// 5. some() - Checks if some of the elements satisfies the condition and return true if at least one element satisfied the condition and false if all elements do not satisfy the condition

// Check if there is a customer whose age is less than 10

const ageLess10 = customerss.some((customer) =>{
    return customer.age < 10
})

console.log("There is a customer whose age is less than 10: ", ageLess10)

// 6. every() - returns true if all elements satisfies the condition and vice versa.

const married = customerss.every((customer) =>{
    return customer.married
})

console.log("All the customers are married: ", married)

// 7. find() - retruns the element that statisfies the condition

const elemAgeLess10 = customerss.find((customer) => {
    return customer.age < 10
})

console.log(elemAgeLess10)

// 8. findLast() - gives the element that statifies thne condition starting from right to left

// 9. findIndex() - give the index of an element that satisfies the condition 

// 10. findLastIndex() - returns the index of an element that satisfies the condition starting fro right to left.

// forEach() - iterates over the elements of an array and returns these elements
// entries() - gives both the index and the value of the element in array . Use for of loop to iterate over the elements
// values() - returns only the values of array. Use for of loops to iterate over the elements of the array
// flatMap() - is the combination of flat() and map() methods

// Array Chaining - Several methods can be chained to give the desired results according to the logic.

// Example - Get the total amount spend by the married customers

// Here we chain both filter() and reduce()

const total = customerss.filter((customer) =>{
    return customer.married;
})
.reduce((accumulator, customer) =>{
    accumulator = accumulator + customer.expense;
    return accumulator;
}, 0);

console.log("Amount spend by married customers:",total)