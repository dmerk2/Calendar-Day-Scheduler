// Get the current day and date from Moment.js
let currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay)

// Take users input inside of the input and append it into input
let newTask = $('input');
let dataID = $('input').attr("data-id")
let taskAdded= [];

  // Bind the click event to the function
  $(".btn").click(function (event) {
    event.preventDefault();
      
    // Select all the elements with the type of text
    $("input[type=text]")
        .each(function () {
        localStorage.setItem("taskAdded", JSON.parse(taskAdded));
      // Print the value currently in the input box
      input.innerHTML = this.value;
      console.log(this.value);
    });
  })

  //Store task into local storage
  function init(){
    taskAdded = localStorage.getItem("taskAdded", JSON.stringify(taskAdded)); 
  }

// Using moment.js determines what time variables represent
let past = moment().subtract(1, 'hour').calendar();
let present = moment().calendar();
let future = moment().add(1, 'hour').calendar();
let input = $('input[type=text]')

// Depending on what time of the day it is determines what class will
// be applied to the textarea
function timeOfDay() {
  if (present) {
    input.attr('class', 'present')
  } else if (present > past) {
    input.attr('class', 'past')
  } else if (present < future) {
    input.attr('class', 'future')
  }
};

console.log(present, past, future)
timeOfDay()
init()


// // The following function renders items in a todo list as <li> elements
// function renderTasks() {
//   // Clear todoList element and update todoCountSpan
//   input.innerHTML = "";
//   input.textContent = taskAdded.length;

//   // Render a new li for each todo
//   for (var i = 0; i < taskAdded.length; i++) {
//     var taskAdded = taskStored[i];

//     // var li = document.createElement("li");
//     textarea.textContent = taskAdded;
//     textarea.setAttribute("data-index", i);

//     // var button = document.createElement("button");
//     // button.textContent = "Complete ✔️";

//     // textarea.appendChild(textarea);
//     console.log(i)
    
//   }
// }
// renderTasks()
// // This function is being called below and will run when the page loads.
// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Add submit event to form
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()
