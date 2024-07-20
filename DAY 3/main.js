// Activity 1 :: If-Else Statements :

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const a=-9
if(a==0) console.log("This is Zero")
    else if(a>0) console.log("This is Positive")
    else console.log("This is Negetive")


// Task 2: Create a program to determine if a person is eligible to vote (age >= 18) and log the result.

const age=19
if(age>=18) console.log("Eligible For Vote")
    else console.log("Not Eligible For vote")


// Activity 2 :: Nested If-Else Statements:

// Task 3: Develop a program that finds the largest of three numbers using nested if-else statements

const p=3,q=1,r=20
if(p<q){
    if(q>r) console.log(q,"is Greatest")
        else console.log(r,"Greatest")
}
else{
    if(p>r) console.log(p,"is Greatest")
        else console.log(r,"Greatest")
} 

// Activity 3 :: Switch Case:

// Task 4: Construct a program that maps a number (1-7) to the corresponding day of the week and logs the result.

const w=2
switch (w) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Twesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("ThursDay")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Enter Valid Number")
        break;
}

// Task 5: Implement a program that assigns a grade (‘A’, ‘B’, ‘C’, ‘D’, ‘F’) based on a score using switch case.

const marks=100

switch(true){
    case marks >= 90:
        console.log("A")
        break;
    case marks>=80:
        console.log("B")
        break;
    case marks>=70:
        console.log("C")
        break;
    case marks>=60:
        console.log("D")
        break;
    default:
        console.log("F")
        break
}


// Activity 4 :: Conditional (Ternary) Operator :

// Task 6: Write a program to check if a number is even or odd using the ternary operator and log the result.

const num=501
num%2==0?console.log(num,"is Even"):console.log(num,"is Odd")


// Activity 5 :: Combining Conditions:
 
// Task 7: Create a program to verify if a year is a leap year (divisible by 4 but not unless also divisible by 400) and log the result.

const yy=1900
if(yy%4==0 && yy %100!=0 || yy%400==0) console.log(yy,"is Leap Year")
    else console.log(yy,"is not a leap Year")