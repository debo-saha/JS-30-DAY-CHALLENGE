// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, year, and log the object to the console.

const book={
    title:"The COC ",
    author:"Debojyoti",
    year:2005
}
console.log(book)

// Task 2: Add a method to the book object that returns a string of the book’s title and author.

console.log(book.author,book.title)

// Activity 2: Object Methods

// Task 3: Add a method to the book object that takes a parameter (year) and updates the book’s year property.

book.year=2024

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.

console.log(book)

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// Task 6: Add tags like name of library and titles of all books in all books in array.

const library=[
    {
        title:"Book 1",
        author:"Debojyoti",
        year:2005
    },
    {
        title:"Book 2  ",
        author:"Debojyoti Saha",
        year:2000
    },
    {
        title:"The Book # ",
        author:"Roger",
        year:2001
    }
]

console.log(library)

// Activity 4: The this Keyword

// Task 7: Modify the book creation use this keyword to return string with books title year, and log result calling this method.

class Book {
    constructor(title, year) {
      this.title = title;
      this.year = year;
    }
  
    getBookInfo() {
      return `Title: ${this.title}, Year: ${this.year}`;
    }
  }
const myBook = new Book("JavaScript Essentials", 2024);
console.log(myBook.getBookInfo());
  

// Activity 5: For…in loop iteration

// Task 8: Use for…in loop iterate over properties of bookstore display each property its value.

const bookstore={
    keya:"valueb",
    keyb:"valuec",
    keyc:"valued"
}
for (const key in bookstore) {
    console.log(key)
}

// Activity 9: Object.keys(), Object.values() methods

// Task 9: Use Object.keys(), Object.values() methods log all keys values bookstore.

console.log(Object.keys(bookstore))
console.log(Object.values(bookstore))