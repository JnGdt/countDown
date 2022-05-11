var countdown = new Date();

function setTimer() {
  var date = new Date();
  var hours = document.getElementById("hours").value;
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  var minutes = document.getElementById("minutes").value;
  date.setTime(date.getTime() + minutes * 60 * 1000);
  var seconds = document.getElementById("seconds").value;
  date.setTime(date.getTime() + seconds * 1000);

  countdown = new Date(date.getTime());

  setInterval(startTimer, 1000);
}

function startTimer() {
  //get current time
  var now = new Date().getTime();

  //get gap
  var distance = countdown - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("output").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(this);
    document.getElementById("output").innerHTML = "Hello World!";
  }
}
