// Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(a) {
    if(a%2==0) console.log("Even")
        else console.log("Odd")
}
checkEvenOdd(5)

// Task 2: Write a function to calculate the square of a number and return the result.

function squareThis(b){
    console.log(b*b)
}
squareThis(10)

// Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax=function(c,d){
    if(c>d) console.log(`${c} is greatest`)
        else console.log(`${d} is greatest`)
}
findMax(5,6)

// Task 4: Write a function expression to concatenate two strings and return the result.

const concat=function(str1,str2){
    console.log(str1+str2)
}
concat("debo","jyoti")

// Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum=(p,q)=>{
    console.log(p+q)
}
sum(4,9)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const findSpecificChar = (str, key) => {
    for (let index = 0; index < str.length; index++) {
        if (key === str[index]) {
            return true;
        }
    }
    return false;
};
console.log(findSpecificChar("rajju", "u")); 
console.log(findSpecificChar("rajju", "x")); 


// Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product=(a1=2,a2=1)=>{
    console.log(a1*a2)
}
product(1)

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.

const greeting=(name,age)=>{
    console.log(`Hii.. ${name}. You are ${age} years old .`)
}
greeting("Rakesh",49)

// Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const callMe=(sayhi,num)=>{
    for(let h=0;h<num;h++){
       sayhi()
    }
}
function sayhi() {
    console.log("hii")
}
callMe(sayhi,5)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

const threeFn=(fn1,fn2,val)=>{
    fn2(fn1(val))
}
const fn1=(a)=>{
    return 5*a
}
const fn2=(a)=>{
    console.log("The ans is",a)
}
threeFn(fn1,fn2,10)