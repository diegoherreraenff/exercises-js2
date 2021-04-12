/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 /*
    
 

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
 // all the "p" element nodes of the document,
 console.log (document.querySelector("p"))

 //the first div element node
 console.log (document.querySelector("div"))

// the element with id "jumbotron-text"
console.log(document.getElementById("jumbotron-text"))


//all the "p" elements of contained inside  the .primary-content element
 console.log(document.querySelector("primary-content.p"))
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

function alet(event) {
    event.preventDefault()
    alert("Thanks for visiting Bikes for Refugees!")
    
}

const button = document.getElementById("alertBtn")
button.addEventListener("click", alet)

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
//funcion callback 
function changeColor(event) {
    event.preventDefault()
    const body = document.querySelector ("body")
    if (body.style.background === "white") {
        body.style.background = "tomato"
} else {body.style.background = "white"}
    }
    
//obternet objeto boton
const backColor = document.getElementById("bgrChangeBtn")
//agregar event listener
backColor.addEventListener("click" , changeColor)


/*
Task 4
======


When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/ 

// 1
function text(event) {
    event.preventDefault()

    
}
//2
const  addtext= document.getElementById("addTextBtn")
//3
addtext.addEventListener("click", text)



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

