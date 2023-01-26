// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const btn = document.getElementById("saveBtn");

setInterval(function(today){
  var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'); //current time and day
  $(currentDay).text(today);
},1000);


//array for objects for each time slot
let scheduler = [
{
  time: "6am",
  num: 6,
  text: ""
},
{
  time: "7am",
  num: 7,
  text: ""
},
{
  time: "8am",
  num: 8,
  text: ""
},
{
  time: "9am",
  num: 9,
  text: ""
},
{
  time: "10am",
  num: 10,
  text: ""
},
{
  time: "11am",
  num: 11,
  text: ""
},
{
  time: "12pm",
  num: 12,
  text: ""
},
{
  time: "1pm",
  num: 13,
  text: ""
},
{
  time: "2pm",
  num: 14,
  text: ""
},
{
  time: "3pm",
  num: 15,
  text: ""
},
{
  time: "4pm",
  num: 16,
  text: ""
},
{
  time: "5pm",
  num: 17,
  text: ""
},
{
  time: "6pm",
  num: 18,
  text: ""
}
];
var currentHour = dayjs().hour()

//Code to change color depending on past or present using military time
$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
