// Task 1: Create a template literal string that includes variables for a person’s name and age, and log the string to the console.

const name="Debojyoti"
const age=55
console.log(`Your Name is ${name} and your age is ${age}`)

// Task 2: Create a multi-line string using template literals and log it to the console.

const title = "JavaScript Essentials";
const year = 2024;
const author = "John Doe";

const bookInfo = `
Title: ${title}
Year: ${year}
Author: ${author}
`;

console.log(bookInfo);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const arr=[4,5,6,7,8,9]

const [first,second,Third]=arr

console.log(first,second,Third)

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book ={
    title1 : "JavaScript Essentials",
    year : 2024,
    author1 :"John Doe"
}

const {title1,author1}=book
console.log(title1,author1)

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const brr=[5,6,1,2,3,8,7,8,5]
const crr=[10,20,30,45,70]
const new_arr=[...brr,...crr,17,18,19]
console.log(new_arr)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...res){
    return res.reduce((curr,pre)=>curr+pre)
}
const result = sum(10, 20, 30, 40, 50);
console.log(result)

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


function product(a,b=1){
    return a*b
}
console.log(product(4))


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const sub="math"
const page=500
const teacher="Ashutosh"

const subject={
    sub,
    page,
    teacher,
    summary(){
        return `${this.page} ${this.sub}`
    }
}
console.log(subject)
console.log(subject.summary())