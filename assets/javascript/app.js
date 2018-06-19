
//Click START button to start timer and first question
var timeLeft = 15
var timer = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);


function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    timer.innerHTML = 'Time Left:' + timeLeft;
    timeLeft--;
  }
}



//This is to check if start button is working with a function
// function myFunction() {
//    alert("Hello"); 
// };





