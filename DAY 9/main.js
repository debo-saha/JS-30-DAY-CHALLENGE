// Task 1: Select an HTML element by its ID and change its text content.

const para=document.getElementById("para")
para.textContent="Hi I am New here"

// Task 2: Select an HTML element by its class and change its background color.

const box=document.querySelector(".box")
box.style.backgroundColor="red"


// Task 3: Create a new div element with some text content and append it to the body.

const new_div=document.createElement("div")
new_div.textContent="this is a new div"
document.body.appendChild(new_div)

// Task 4: Create a new li element and add it to an existing ul list.

const new_li=document.createElement("li")
new_li.innerHTML="Devpholio"
document.querySelector(".nav").appendChild(new_li)

// Task 5: Select an HTML element and remove it from the DOM.

document.querySelector(".login").remove()

// Task 6: Remove the last child of a specific HTML element.

document.querySelector(".AABB").lastElementChild.remove()

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

document.querySelector(".img").src="https://th.bing.com/th/id/OIP.u0Il_LR5jyMb3dnV3ZYLtgHaE7?w=500&h=333&rs=1&pid=ImgDetMain"

// Task 8: Add and remove a CSS class to/from an HTML element.

para.classList.add("abc")
para.classList.remove("abc")

// Task 9: Add a click event listener to a button that changes the text content of a paragraph

document.querySelector(".qqq").addEventListener("click",()=>{
    para.textContent="i am after click"
})

// Task 10: Add a mouseover event listener to an element that changes its border color.

document.querySelector(".border").addEventListener("mouseover",()=>{
    document.querySelector(".border").style.border="2px solid red"
})