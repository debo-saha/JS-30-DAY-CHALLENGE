// Activity 1: Array Creation and Access

// Create an array of numbers from 1 to 5.

const arr=[88,6,55,99,11]

// Access the first element of the array and log the array to the console.

console.log(arr[0])
console.log(arr)

// Use the push method to add a new element to the end of the array and log the updated array.

arr.push(9)
console.log(arr)

// Use the pop method to remove a number from the end of the array and log the updated array.

arr.pop()
console.log(arr)

// Use the shift method to remove a number from the beginning of the array and log the updated array.

arr.shift()
console.log(arr)


// Activity 2: Array Basics 

//  Use the unshift method to add a new element to the beginning of the array. 

arr.unshift(100)
console.log(arr)

//  Use the sort method to list all elements in ascending order by value. 

arr.sort((a,b)=>a-b)
console.log(arr)

// Use the map method to create a new array where each number is doubled and log the new array.

dblarr=arr.map((a)=>a*2)
console.log(dblarr)

// Activity 3: Array Methods (Intermediate) 

//  Use the filter method to create a new array with only even numbers and log the new array. 

fltarr=arr.filter((e)=>{
    return e%2==0
})
console.log(fltarr)

//  Use the reduce method to calculate the sum of all numbers in the array and log the result.

brr=[1,2,3,4,5,6,10]
sum= brr.reduce((res,currValue)=>res+currValue)
console.log(sum)


// Activity 4: Loop Activities 

//  Use a forEach loop to iterate over every item and log each element to the console. 

brr.forEach(element => {
    console.log(element)
});

// Create a two-dimensional array (matrix) and log the entire array to the console. 

const matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix)

// Access and log a specific element from the two-dimensional array.

console.log(matrix[2][2])