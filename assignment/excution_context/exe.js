// Exaplanation of excution context of this code is in exe.md file

console.log("Execution Context")

const message = 'I will make it'

function sum(a, b){
    const result = a + b;
    return result
}

function mul(a, b){
    const result = a * b
    return result
}

function cal(a, b){
    return (sum(a, b) + mul(a, b)) / 2
}

function getResult(a, b){
    return cal(a, b)
}

console.log(getResult(8, 5))
