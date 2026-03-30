## Explain the execution context of these code

```js
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

```

## Stack and Heap flow diagram

![Screenshot for stack and heap flow diagram](image.png)

## GEC and FEC with CF and EF 
![Screenshot for GEC and FEC with CF and EF flow](image-1.png)

## The Stack Diagram

![Image for stack Diagram](image-2.png)