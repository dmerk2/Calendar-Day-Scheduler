const calendar = $('#calendar');

for (let i = 1; i <= 24; i++) {
  console.log(i)

$("#calander").text('beforeend', `<div class = 'i'>${i}</div>`)  
} 

let time = moment().format('dddd, MMMM Do YYYY'); 
$("#currentDay").text(time)