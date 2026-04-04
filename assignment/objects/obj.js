console.log('Objects and objects manipulation')

// How objects are created.

// 1. Using Object literals

// The value can be of any type. i.e

// array
const items = {
    stationeries: ['books', 'pencils', 'markers', 'eraser'],
    chicken: ['knife', 'Gas Tank', 'Dish', 'Chop Stick'],
    technology:['computer', 'laptop', 'phone', 'ship'],
}

// Accessing

console.log(items.stationeries)

// string
const car = {
    name: 'Audi',
    color: 'biege',
    model: 'cx5'
}

console.log(car.color)

// another object(what we call nested object)
const person = {
    name: 'Salim',
    age: 50,
    country: 'Kenya',
    address: {
        IP: '123 Street name',
        ZIP: 2345,
        'house number': '23WWD'
    }
}

console.log(person.address)
console.log(person.address['house number'])

// a function

const confirmation = {
    name: 'Salim',
    email: 'johndoe123@gmain.com',
    country: 'Atlanta',
    confirm: function(){
        console.log(`Please confirm the following details name: ${this.name}, email: ${this.email} and country: ${this.country}`)
    }
}

confirmation.confirm()

// 2. Constructor function - is like a blueprint for creating multiple objects containing the similar properties

function Units(title, school, score, departiment){
    this.title = title,
    this.school = school,
    this.score = score,
    this.departiment = departiment
}

const unit1 = new Units('SST410', 'SPAS', 'A', 'Mathematics')
const unit2 = new Units('SST401', 'SPAS', 'B', 'Mathematics')
const unit3 = new Units('EET110', 'SOE', 'A', 'Economics')

console.log(Units)
console.log(unit1)
console.log(unit1.departiment)
console.log(unit2)
console.log(unit2.school)

// 3. Using Object()

const profession = new Object()

profession.name = 'Abdul Najib'
profession.departiment = 'ICT'
profession.salary = '$2500'

console.log(profession)

// Factory Function
function staffs(name, departiment){
    return{
        name,
        departiment
    }
}

const staff1 = staffs('Kinywa', 'HR')
const staff2 = staffs('Mumia', 'Managerial')
const staff3 = staffs('Mbita', 'IT')

console.log(staff1)
console.log(staff1.name)

// Checking whether a particular property exists in an object

const student = {
    name: 'Kalamu Mkubwa',
    grade: 10,
    age: 15,
    subjects: ['English', 'Swahili', 'Science', 'Religion'],
    parents:{
        Mother: 'Jojo Mkubwa',
        Father: 'Kofi Kofi'
    },
    email: 'kofikofo@gmail.com',
    address: {
        city: 'Kwao',
        street: 'Majini',
        zip: 1234,
        IP: '1234 Kwao Majini'
    }, 
    message: function(){
        console.log(`The student ${this.name} in grade ${this.grade} is well mannered and very hard working.`)
    }
}

for(let prop in student){
    console.log(prop)
}

// Object Destructuring - breaking apart.

