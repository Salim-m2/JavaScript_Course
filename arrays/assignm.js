console.log("Array Assignment Practice")

// T-001: Create an array of 5 elements using the Array Constructor.
const arrayFiveElements = new Array('First', 'Second', 'Third', 'Fourth', 'Fifth');
console.log(arrayFiveElements)


//  T-002: Create an array of 3 empty slots.
const emptySlots = new Array(3);
console.log(emptySlots)

//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const cars = ['BMW', 'Volvo', 'Toyota', 'Audi', 'Ferrari']
console.log("The forth car is: ",cars[cars.length - 2])

//  T-004: Use the for loop on the above array to print elements in the odd index.
for(let i = 0; i < cars.length; i++){
    if(i % 2 !== 0){
        console.log("The is in the odd position:",cars[i])
    }
}

//  T-005: Add one element at the front and the end of an array.
// At the front

cars.unshift('Tesla');
console.log(cars);

// At the end

cars.push('Land Cruiser');
console.log(cars);

//  T-006: Remove an element from the front and the end of an array.
// At the front
cars.unshift()
console.log(cars)

// At the end
cars.pop()
console.log(cars)

//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

const favFoods = ["Chiken", "Ugali", "Tilapia", "Beef", "Mango", "Burger", 'Pizza', "Smookie", "Hot Dog", "Cheese"];

const [, , , , ,sixthFood, , , ,] = favFoods;

console.log("The sixth element is: ",sixthFood)

//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

const [, , ...lastEight] = favFoods;
console.log(lastEight);

//  T-009: Clone an Array(Shallow cloning)

// Use spread operator
const clonedFavFoods = [...favFoods]

// Use spread operator
// const clonedFavFoods = favFoods.slice();

console.log(clonedFavFoods);
console.log(cars === clonedFavFoods)

//  T-010: Empty an array using its length property
favFoods.length = 0
console.log(favFoods)

//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

const arrayOfTenElems = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

for(let i = 0; i < arrayOfTenElems.length;  i++){

    if( arrayOfTenElems[i] === 5){
        arrayOfTenElems.length = 6;
    }

    console.log(arrayOfTenElems[i]);
}

console.log(arrayOfTenElems);

//  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

const tenElems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tenElems.splice(0, 10);

console.log(tenElems);

//  T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() 
const anotherArrayOfTenElems = [20, 30, 50, 90, 68, 78, 54, 34, 52, 21]

//1. using pop()

// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()
// anotherArrayOfTenElems.pop()

//2. using length property
// anotherArrayOfTenElems.length = 0;

//3. using shift() method

// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()
// anotherArrayOfTenElems.shift()

//3. setting array with []

// anotherArrayOfTenElems = []

//4. Using splice() method

anotherArrayOfTenElems.splice(0, anotherArrayOfTenElems.length)

console.log(anotherArrayOfTenElems)

// method. Which among these methods are most efficient and why?

// - The length property and splice method - this because they are direct and they take just one line of code to do so as compared to others which take several lines of code. Setting the array to [] is inefficient because it will led to an error when the array is defined using const.



//  T-014: What happens when you concatenate two empty arrays?

//  - They form a new empty array

const empty1 = [];

const empty2 = [];

const arrEmpt = empty1.concat(empty2)

console.log(arrEmpt)// A new empty array

//  T-015: How can you check if a value is partially matching with any of the elements of an Array?

// Using includes() method

const relatives = ['Father', 'Mother', 'Siblings', 'Grandfather', 'Grandmother', 'Uncle', 'Cousine', 'Nephew']

console.log(relatives.includes('Niece')) // false
console.log(relatives.includes('Father')) // true

//  T-016: What is the difference between the slice() and splice() methods?

// slice() - clones/copies an array. splice() -  delete, adds or modifies the elements of an array and returns the deleted elements

// slice()
const family = ['Father', 'Mother', 'Children'];

const copyFamily = family.slice();
console.log(copyFamily);

// splice()
console.log(family);
family.splice(3, 0, 'Grandfather', 'Grandmother', 'Aunt', 'Uncle');

console.log(family);

//  T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending 

const alphaNum = ['ws34', 'i122', '12sd', 'gta6', 'ads21', 'saq2', 'kq21']

// ascending order

const asc = alphaNum.toSorted((a, b) =>{
    return a === b ? 0 : a > b ? 1 : -1
})

console.log(asc)

// descending order

const desc = alphaNum.toSorted((a, b) =>{
    return a === b ? 0 : a > b ? -1 : 1
})

console.log(desc)

// orders. You must be doing this in an immutable way such that the source array never gets modified.


//  T-018: Can you give examples of sparse and dense arrays?
// space - have loops

const sparseArray = [1, 3, 4, , 5, , 8]
console.log(sparseArray)

// dense - continuous
const denseArray = [1, 3, 4,5 ,7, 8, 9]
console.log(denseArray)

//  T-019: Give a practical usages of the .fill() method

// Used to replace array elements with static value

const color = ['Red', 'Blue', 'Green', 'Cream', 'White', 'Biege']
console.log(color)

const accordingToMen = color.fill('White', 3, 6)

console.log(accordingToMen)

//  T-020: How to convert an array to a string?

// One way I of converting an array to string is using join() method

const myArray = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

console.log(myArray.join(" <=> "))

// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
//  T-021: Can you filter employees who work in the "Engineering" department?

const empEngDept = employees.filter((employee) =>{
    let matchId;
    departments.filter((department) => {
        if(department.name === 'Engineering'){
            matchId = department.id
        }
    })

    return employee.departmentId === matchId
})

console.log(empEngDept)

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employNameAndTitle = employees.map((employee) =>{

    const dept = departments.find((department) =>{
      return department.id === employee.departmentId;
    });

   return `${employee.name} (${dept.name})`;
})
console.log(employNameAndTitle)

//  T-023: Find the highest salary among employees.

const highestSalary = employees.reduce((maxSalary, amount) =>{

    return amount.salary > maxSalary.salary ? amount : maxSalary;    
})

console.log(highestSalary);

//  T-024: Check if there is at least one employee in the "Sales" department.
const checkEmpSales = employees.some((employee) => {
   const nameDept = departments.find((department) => {
        return department.id === employee.departmentId
    })

    return nameDept.name === 'Sales';
})

console.log(checkEmpSales);

//  T-025: Write a function to filter employees earning more than 6000.
const emplMoreSixk = employees.filter((employee) =>{
    return employee.salary > 6000;
})

console.log(emplMoreSixk);

//  T-026: Create an array of employee names only.
const employeeNames = employees.map((employee) =>{
    return employee.name
})

console.log("Employees Name Only",employeeNames)

//  T-027: Calculate the total salary of all employees using
const totalSalry = employees.reduce((accumulator, employee) =>{
    return accumulator + employee.salary;
}, 0)

console.log(totalSalry);

//  T-028: Is there any employee earning less than 5000?

// Here we can use find() to get the employee earning less than 5000. 
const salaryLessFiveK = employees.find((employee) =>{
    return employee.salary < 5000;
})

console.log(salaryLessFiveK)

// Or use some() to check whether there is employee earning less than 5000.

const checkSalLesssFiveK = employees.some((employee) => employee.salary);

console.log(checkSalLesssFiveK);

//  T-029: Find the first employee who earns exactly 5100.
const firstSal5_1k = employees.find((employee) => employee.salary === 5100);
console.log(firstSal5_1k)

//  T-030: Find the last employee in the "HR" department.
const lastEmpInHR = employees.findLast((employee) =>{
    const link = departments.find((dept) => {
        return dept.id === employee.departmentId;
    });

    return link.name === 'HR'
})
console.log(lastEmpInHR)

//  T-031: Find the first employee in the "Marketing" department.
const firstEmpInMkt = employees.find((employee) =>{
    const depart = departments.find((dept) => {
        return dept.id === employee.departmentId;
    })
    return depart.name === "Marketing";
})
console.log(firstEmpInMkt);

//  T-032: Check if all employees earn more than 4000.
const ifAllAbove4k = employees.every((employee) => employee.salary > 4000);
console.log(ifAllAbove4k);

//  T-033: Find the first employee in the "Sales" and "HR" department.
const firstInSales = employees.find((employee) =>{
    const dept = departments.find((department) =>{
       return department.id === employee.departmentId;
    })
   return dept.name === "Sales";
}) 

const firstInHR = employees.find((employee) =>{
    const dept = departments.find((department) =>{
        return department.id === employee.departmentId;
    });

    return dept.name === 'HR';
})
console.log(firstInSales);
console.log(firstInHR);

// Alternatively we can use the Helper function

function findTheFirstEmployByDepartment(department){
    return employees.find((employee) =>{ 
        const dept = departments.find((depts) =>{
            return depts.id === employee.departmentId;
        })

        return dept.name === department;
    })
}

console.log("Sales", findTheFirstEmployByDepartment('Sales'));
console.log("HR", findTheFirstEmployByDepartment('HR'));
console.log("Marketing", findTheFirstEmployByDepartment('Marketing'));

//  T-034: Verify if all employees belong to a department listed in the departments array.
const allEmployessHaveDept = employees.every((employee) =>{
    const dept = departments.find((department) =>{
        return department.id === employee.departmentId;
    })
})
console.log("All employees have department", allEmployessHaveDept);

//  T-035: Log each employee's name and department name to the console.

// Employee's Name
employees.forEach(employeeName => {
    console.log(employeeName.name)    
});

// department name

departments.forEach((deptname) => console.log(deptname.name))


//  T-036: Extract all employee names into a single array.

const empName = employees.map((names) => names.name)
console.log(empName)

//  T-037: Increment each employee's salary by 10%

const increasedSalary = employees.map((employee) =>{
    return Math.floor(employee.salary + (employee.salary * (10/100)));
});

console.log(increasedSalary);

//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

//  T-039: Find the total salary of all employees working in the "Engineering" department.

const linkEmploysAndDept = employees.filter((employee) =>{
    const getDept = departments.find((department) =>{
        return department.id === employee.departmentId
    });
    return getDept.name === "Engineering";
}).reduce((accumulator, employee) =>{
    return accumulator + employee.salary;
}, 0);

console.log(linkEmploysAndDept);

//  T-040: Check if there is any department where all employees earn more than 5000.

const depAndEmploy = departments.some((department) =>{
    const getEmployee = employees.filter((employee) =>{
        return department.id === employee.departmentId;
    });

    return getEmployee.every((employee) =>{
        return employee.salary > 5000
    });
})

console.log(depAndEmploy);


//  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

//  T-042: For each employee, find their department name and return an array of employee names with their department names.

const employeeNameAndDeptName = employees.map((employee) =>{
    const depart = departments.find((department) =>{
        return department.id === employee.departmentId;
    })

    return {
        employeeName : employee.name,
        departName : depart.name
    }
})

console.log(employeeNameAndDeptName)

//  T-043: Get a list of names of employees earning more than 6000.
// First Approach
employees.forEach((employee) =>{
    if(employee.salary > 6000){
        console.log (employee.name);
    }
})

// Second Approach - This one is the best
const employeeEarningMorethan6k = employees.filter((employee) =>{
    return employee.salary > 6000;
})
.map((employee) =>{
    return employee.name;
});

console.log(employeeEarningMorethan6k);

//  T-044: Write a for-of loop to print the names of all employees from the employees array.

//  T-045: Using a for-of loop, print the names of employees earning more than 5000.

//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

//  T-047: Write a for-of loop to match employees with their departments and print the results.

//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

//  T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };

const convertedArrayLike = Array.from(arrayLike)

console.log(arrayLike)
console.log(convertedArrayLike[1]);

//  T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function converToArray(){
    return Array.from(arguments);
}

console.log(converToArray("Pray", "Plan", "Action"));

// or Using spread operator

function converToArray1(...args){
    return args
}

console.log(converToArray("Process", "Commit", "Persist"));


//  T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

const divElements = document.querySelectorAll('div');

const convertDivToArray = Array.from(divElements);
console.log(divElements);
console.log(convertDivToArray);

//  T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

// using spread operator

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// using concat()

console.log(arr1.concat(arr2));

//  T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const arrayOfDuplicateValues = Array.from({length : 5}, () => "A");
console.log(arrayOfDuplicateValues);

//  T-054: Use 
// Array.from to convert a string like "Hello" into an array of characters.

const convertStringToArray = Array.from("Hello")

console.log(convertStringToArray)

//  T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

//  T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

//  T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

//  T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

//  T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array:

//  const nestArray = [['a', 'b'], ['c', 'd']]

//  const flatArray = nestArray.flatMap()
//  console.log(flatArray)

//  T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

//  T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

//  T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

//  T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

//  T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

// const users = [
//   { name: 'Alice', age: 55 },
//   { name: 'Bob', age: 3 },
//   { name: 'Charlie', age: 25 },
// ];
//  T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
//  T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]