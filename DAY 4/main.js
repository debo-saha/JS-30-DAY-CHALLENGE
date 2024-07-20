// Activity 1 :: For Loop :

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(var i=1;i<=10;i++) console.log(i)


// Task 2: Create a program to print the multiplication table of 5 using a for loop.

for(var j=1;j<=10;j++){
    console.log(`5 * ${j}= ${5*j}`)
}


// Activity :: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

var ii=1,sum=0
while(ii<=10){ 
    sum+=ii
    ii++
}
console.log(sum)

// Task 4: Print numbers from 10 to 1 using a while loop.

var jj=10
while(jj!=0){
    console.log(jj)
    jj--
}


//  Activity 3 :: Do..While Loop

// Task 5: Print numbers from 1 to 5 using a do…while loop.

var kk=1
do {
    console.log(kk)
    kk++;
} while (kk!=6);

// Task 6: Calculate the factorial of a number using a do…while loop.

var fact=1
var ll=5
do {
    fact*=ll;
    ll--;
} while (ll!=0);

console.log(fact)

// Activity 5 :: Nested Loop :

//  *
//  * * 
//  * * *
//  * * * *
//  * * * * *

for(var st=1;st<=5;st++){
    let ans=""
    for(var vw=1;vw<=st;vw++){
        ans+="* "
    }
    console.log(ans)
}

// Activity 6 :: 

// Task 1: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(var con=1;con<=10;con++){
    if(con==5)continue;
console.log(con)
}

// Task 2: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(var brk=1;brk<=10;brk++){
    if(brk==7)break;
console.log(brk)
}