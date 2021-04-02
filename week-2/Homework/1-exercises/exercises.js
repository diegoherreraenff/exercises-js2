/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let content = document.querySelector("#content");
console.log(content)
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(element => {
    const h1 = document.createElement("h1")
    h1.append(element.name);
    const h2 = document.createElement("h2")
    h2.append(element.job)
    content.append(h1, h2)
  });







}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const list = document.createElement("ul")
  shopping.forEach(element => {
    const list2 = document.createElement("li")
    list2.append(element)
    list.append(list2)


  });
  content.append(list)
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  elementoH1 = document.createElement("h1");
  elementoH1.append("Book List")
  elementoUL = document.createElement("ul")

  let img1 = "week-2\Homework\1-exercises\imgen\the-design.jpeg";
  let img2 = "week-2\Homework\1-exercises\imgen\the-most.jpeg";
  let img3 = "week-2\Homework\1-exercises\imgen\the-pragmatic.png";
  let arrayimagen = [];
  arrayimagen.push(img1, img2, img3)
  books.forEach((book, i) => {
    const elementoLI = document.createElement("li")
    const elementoP = document.createElement("p");
    const elementoimagen = document.createElement("img");
    elementoP.append(book.title + book.author);
    elementoLI.classList.add("list-class")

    elementoimagen.src = arrayimagen[i];
    if (book.alreadyRead) {
      elementoLI.style.backgroundColor = "green"
    } else {
      elementoLI.style.backgroundColor = "red"
    }
    elementoUL.append(elementoLI);
  }
  )

content.append(elementoH1, elementoUL)

  
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
