//   let newTaskAdded = JSON.parse(localStorage.newTaskAdded);
//   newTaskAdded = JSON.stringify(localStorage.newTaskAdded)
//   // Store information into local storage
//   localStorage.setItem('newTask', newTaskAdded);
//   localStorage.getItem('newTask', newTaskAdded);


// Get the current day and date from Moment.js
let currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay)

// Take users input inside of the textarea and append it into textarea
let newTask = $('textarea');
let dataID = $('textarea').attr("data-id")

// When the save button is clicked....
$('.btn').on("click", function (event) {
  event.preventDefault();

  textarea.attr('class', 'future');

  dataID = $(this).attr('data-id');

});

let past = moment().startOf('hour').fromNow();
let present = moment().startOf();
let future = moment().endOf('hour').fromNow();
let textarea = $('textarea')

// Determine what time of day it is 
function timeOfDay() {

  if (present) {
    textarea.attr('class', 'present')
  } else if (present > past) {
    textarea.attr('class', 'past')
  } else if (present < future) {
    textarea.attr('class', 'future')
  }
};

timeOfDay() 