// Get the current day and date from Moment.js
let currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay)

// Take users input inside of the textarea and append it into textarea
let newTask = $('textarea');
let dataID = $('textarea').attr("data-id")
let task = localStorage.getItem("task");

// When the save button is clicked the users input will be saved to local storage
$('.btn').on("click", function () {
  localStorage.setItem("task", task);

  // dataID = $(this).attr('data-id');
  // console.log(dataID)
});

let past = moment().startOf('hour').fromNow();
let present = moment().startOf();
let future = moment().endOf('hour').fromNow();
let textarea = $('textarea')

// Depending on what time of the day it is determines what class will
// be applied to the textarea
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



