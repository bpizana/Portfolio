var timeNow = document.getElementById("time") ;

const today = new Date();

var h = (today.getHours() >= 13)
  ? today.getHours()-12
  : today.getHours();
var m = (today.getMinutes() < 10)
  ? "0" + today.getMinutes()
  : today.getMinutes();
var ampm = (today.getHours() >= 12) ? "PM" : "AM";

function time(x){
  return x = h + ":" + m + " " + ampm;
}
time();
setInterval(time, 1000); // Repeat every 5000 milliseconds (5 sec)
timeNow.innerHTML = time();
