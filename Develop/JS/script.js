// Get the current day and date from Moment.js
let currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(currentDay)

// Take users input inside of the textarea and append it into textarea
let newTask = $('textarea');
$('textarea').text(newTask)

let newTaskAdded = function inputNewTask (event) {
  event.preventDefualt();
  console.log('clcfgadick')
  // userInput = event.concat('textarea', taskInput)
  task.addClass('taskAdded', event);
  task.appendTo(textarea);
};

$('btn').click('submit', newTaskAdded, console.log('click'))

let past = moment().startOf('hour').fromNow(); 
let present = moment().fromNow();
let future = moment().endOf('hour').fromNow(); 

function timeOfDay() {
  if (present) {
    console.log('present')
  } else if (present === past) {
    console.log('current time')
  } else if (present === future) {
    console.log('future')
  }
}

timeOfDay()

// var printSkills = function (name, date) {
//   var listEl = $('<li>');
//   var listDetail = name.concat(' on ', date);
//   listEl.addClass('list-group-item').text(listDetail);
//   listEl.appendTo(skillsListEl);
// };

// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var nameInput = nameInputEl.val();
//   var dateInput = dateInputEl.val();

//   if (!nameInput || !dateInput) {
//     console.log('You need to fill out the form!');
//     return;
//   }

//   printSkills(nameInput, dateInput);

//   // resets form
//   nameInputEl.val('');
//   dateInputEl.val('');
// };
// formEl.on('submit', handleFormSubmit);
