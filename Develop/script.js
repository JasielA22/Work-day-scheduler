// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  setInterval(function(today){
  var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'); //current time and day
  $(currentDay).text(today);
},1000);


//array for objects for each time slot

var allTimeBlocks = document.querySelectorAll(".time-block")

 var currentTime = dayjs().format('HH');

for (var i = 0; i < allTimeBlocks.length; i++) {  // for loop
 var timeBlockHour = parseInt(allTimeBlocks[i].id)
 if (currentTime > timeBlockHour)  {
  allTimeBlocks[i].classList.add("past")
 } else if (currentTime < timeBlockHour) {
  allTimeBlocks[i].classList.add ("future")
 } else if (currentTime = timeBlockHour) {
  allTimeBlocks[i].classList.add ("present")
 }
}
    

$(function (){

    // function locallyStored() {
    //   console.log(this)
    //   var input = $(this).siblings(".description").val(); 
    //   localStorage.setItem('string', input.val);
    //   console.log(this)
    // }

  //   for (var i = 0 ; i < btn.length; i++) {
  //     btn[i].addEventListener('click' , locallyStored) ; 
  //     console.log(this)

  //     input[i]

  //  }
//jquery
    $(".saveBtn").on("click", function() {

      var input = $(this).siblings(".description").val(); 
      var timeBlock = $(this).parent().attr("id");
      console.log(this)

      localStorage.setItem(timeBlock, input);
    })

    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  })
})


 

 
//Code to change color depending on past or present using military time




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
  // attribute of each time-block be used to do this
