// Attempt 1

/*window.onload = function() {
  var min20 = document.getElementById("20min") ;
  var min10 = document.getElementsByClassName("10min");
  var min16 = document.getElementById("16min") ;
  var min15 = document.getElementById("15min") ;
  const today = new Date();



  var arrival = function(){

    function nextArrival20(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 5){     // Check the time
        mm = "05";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 5 && today.getMinutes() < 25 ){     // Check the time
        mm = "25";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 25 && today.getMinutes() < 45 ){     // Check the time
        mm = "45";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 45){
        hh = hh + 1;
        mm = "05";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min20.innerHTML = "n/a";
      }
    }
    nextArrival20();

    function nextArrival15(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 15){     // Check the time
        mm = "15";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 15 && today.getMinutes() < 30 ){     // Check the time
        mm = "30";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 30 && today.getMinutes() < 45 ){     // Check the time
        mm = "45";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 45){
        hh = hh + 1;
        mm = "00";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min15.innerHTML = "n/a";
      }
    }
    nextArrival15();


    function nextArrival10(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 10){     // Check the time
        mm = "10";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 10 && today.getMinutes() < 20 ){     // Check the time
        mm = "20";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 20 && today.getMinutes() < 30 ){     // Check the time
        mm = "30";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 30 && today.getMinutes() < 40 ){     // Check the time
        mm = "40";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 40 && today.getMinutes() < 50 ){     // Check the time
        mm = "50";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 50){
        hh = hh + 1;
        mm = "00";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min10.innerHTML = "n/a";
      }
    }
    nextArrival10();

  }
  arrival()
  setInterval(arrival, 1000); // Repeat every 1000 milliseconds (1 sec)

}*/


// Atempt 2

/*window.onload = function() {
  var min10;
  var min20 = document.getElementById('20min');
  var min16 = document.getElementById('16min');
  var min15 = document.getElementById('15min');
  const today = new Date();

  const min = Array.apply(null, { length: 1440 }).map(Number.call, Number);

  var currentMin = today.getMinutes() + today.getHours() * 60; // minutes gone by today so far
  var ampm = today.getHours() >= 12 ? 'PM' : 'AM';
  var mm;
  var hh;
  var time;
  var int = 5;

  // var start = 420;
  // var end = 1260;
  function arrival(){
  function nextArrival10() {
    var min10 = document.getElementsByClassName("min10");
    for (i = 0; i < min10.length; i++) {
      for (var i = currentMin; i < min.length; i++) {
        //for next time will arrive
        // for (var i = start; i < end; i++) {  // between 2 times
        if (i % 10 === 0) {
          var hours = Math.floor(i / 60) >= 13
            ? Math.floor(i / 60) - 12
            : Math.floor(i / 60);
          var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
          time = hours + ':' + minutes + ' ' + ampm;
          return min10.innerHTML = time;
        }
      }
    }
  }

  function nextArrival15() {
    for (var i = currentMin; i > 420 && i < 1260; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if ((i + int) % 15 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
        time = hours + ':' + minutes + ' ' + ampm;
        return (min15.innerHTML = time);
      }
    }
    return (min10.innerHTML = '7:00 AM');
  }

  function nextArrival16() {
    for (var i = currentMin; i < min.length; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if (i % 16 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;

        time = hours + ':' + minutes + ' ' + ampm;

        return (min16.innerHTML = time);
      }
    }
    return (min16.innerHTML = '7:00 AM');
  }

  function nextArrival20() {
    for (var i = currentMin; i < min.length; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if (i % 20 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
        time = hours + ':' + minutes + ' ' + ampm;
        return (min20.innerHTML = time);
      }
    }
    return (min16.innerHTML = '7:00 AM');
  }

  nextArrival10();
  nextArrival15();
  nextArrival16();
  nextArrival20();

  console.log(nextArrival10());
}
arrival();
setInterval(arrival, 1000); // Repeat every 5000 milliseconds (5 sec)

};
*/


// Attempt 3

window.onload = function() {
  const today = new Date();
  const minInDay = Array.apply(null, { length: 1440 }).map(Number.call, Number);
  var currentMin = today.getMinutes() + today.getHours() * 60; // minutes gone by today so far
  var ampm = (today.getHours() >= 12) ? "PM" : "AM";

  Function Bus(num, line, interval, direction, startTime, endTime, offset, times, nextTime){
    this.num = num,
    this.line = line,
    this.interval = interval,
    this.direction = direction,
    this.startTime = startTime,
    this.endTime = endTime,
    this.offset = function(){
      var offset = start % 10;
      return offset;
    }
    this.times = function(){
      var timesMin = [];
      var times = [];
      for (var i = start; i < end; i++) {
        var ampm = i > 719 ? 'PM' : 'AM'; //after 11:59 make time show PM
        if (i % interval === offset) {
          var hours = Math.floor(i / 60) >= 13
            ? Math.floor(i / 60) - 12
            : Math.floor(i / 60); //12hr clock
          var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60; //add 0 before numbers < 10
          time = hours + ':' + minutes + ' ' + ampm;
          times.push(time);

          timeMin = min[i];
          timesMin.push(timeMin);
        }
      }
      console.log(timesMin, times);
    }
    this.nextTime = function(){
      for (var i = 0; i < times.length; i++) {
        if (timesMin[i] <= currentMin) {
          var next = timesMin[i+1];
          var hours = Math.floor(next / 60) >= 13
            ? Math.floor(next / 60) - 12
            : Math.floor(next / 60); //12hr clock
          var minutes = next % 60 < 10 ? '0' + next % 60 : next % 60; //add 0 before numbers < 10
          nextTime = hours + ':' + minutes + ' ' + ampm;
        } else{
          continue;
        }
      }
      console.log(nextTime);
    }
  }
  var bus60 = new bus(60,"Randolph/Harbor Dr",20,"Eastbound",420/*7am*/,1260/*9pm*/);


// every 20 min
// add 20 min to the ETA
// return the new time

// Attempt 1

/*window.onload = function() {
  var min20 = document.getElementById("20min") ;
  var min10 = document.getElementsByClassName("10min");
  var min16 = document.getElementById("16min") ;
  var min15 = document.getElementById("15min") ;
  const today = new Date();



  var arrival = function(){

    function nextArrival20(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 5){     // Check the time
        mm = "05";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 5 && today.getMinutes() < 25 ){     // Check the time
        mm = "25";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 25 && today.getMinutes() < 45 ){     // Check the time
        mm = "45";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 45){
        hh = hh + 1;
        mm = "05";
        return min20.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min20.innerHTML = "n/a";
      }
    }
    nextArrival20();

    function nextArrival15(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 15){     // Check the time
        mm = "15";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 15 && today.getMinutes() < 30 ){     // Check the time
        mm = "30";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 30 && today.getMinutes() < 45 ){     // Check the time
        mm = "45";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 45){
        hh = hh + 1;
        mm = "00";
        return min15.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min15.innerHTML = "n/a";
      }
    }
    nextArrival15();


    function nextArrival10(){
      var hh = (today.getHours() >= 13) ? today.getHours()-12 : today.getHours();
      var mm = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
      var ampm = (today.getHours() >= 12) ? "PM" : "AM";
      if(today.getMinutes() < 10){     // Check the time
        mm = "10";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      } else if (today.getMinutes() >= 10 && today.getMinutes() < 20 ){     // Check the time
        mm = "20";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 20 && today.getMinutes() < 30 ){     // Check the time
        mm = "30";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 30 && today.getMinutes() < 40 ){     // Check the time
        mm = "40";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 40 && today.getMinutes() < 50 ){     // Check the time
        mm = "50";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      }else if (today.getMinutes() >= 50){
        hh = hh + 1;
        mm = "00";
        return min10.innerHTML = hh + ":" + mm + " " + ampm;
      } else{
        return min10.innerHTML = "n/a";
      }
    }
    nextArrival10();

  }
  arrival()
  setInterval(arrival, 1000); // Repeat every 1000 milliseconds (1 sec)

}*/


// Atempt 2

/*window.onload = function() {
  var min10;
  var min20 = document.getElementById('20min');
  var min16 = document.getElementById('16min');
  var min15 = document.getElementById('15min');
  const today = new Date();

  const min = Array.apply(null, { length: 1440 }).map(Number.call, Number);

  var currentMin = today.getMinutes() + today.getHours() * 60; // minutes gone by today so far
  var ampm = today.getHours() >= 12 ? 'PM' : 'AM';
  var mm;
  var hh;
  var time;
  var int = 5;

  // var start = 420;
  // var end = 1260;
  function arrival(){
  function nextArrival10() {
    var min10 = document.getElementsByClassName("min10");
    for (i = 0; i < min10.length; i++) {
      for (var i = currentMin; i < min.length; i++) {
        //for next time will arrive
        // for (var i = start; i < end; i++) {  // between 2 times
        if (i % 10 === 0) {
          var hours = Math.floor(i / 60) >= 13
            ? Math.floor(i / 60) - 12
            : Math.floor(i / 60);
          var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
          time = hours + ':' + minutes + ' ' + ampm;
          return min10.innerHTML = time;
        }
      }
    }
  }

  function nextArrival15() {
    for (var i = currentMin; i > 420 && i < 1260; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if ((i + int) % 15 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
        time = hours + ':' + minutes + ' ' + ampm;
        return (min15.innerHTML = time);
      }
    }
    return (min10.innerHTML = '7:00 AM');
  }

  function nextArrival16() {
    for (var i = currentMin; i < min.length; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if (i % 16 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;

        time = hours + ':' + minutes + ' ' + ampm;

        return (min16.innerHTML = time);
      }
    }
    return (min16.innerHTML = '7:00 AM');
  }

  function nextArrival20() {
    for (var i = currentMin; i < min.length; i++) {
      //for next time will arrive
      // for (var i = start; i < end; i++) {  // between 2 times
      if (i % 20 === 0) {
        var hours = Math.floor(i / 60) >= 13
          ? Math.floor(i / 60) - 12
          : Math.floor(i / 60);
        var minutes = i % 60 < 10 ? '0' + i % 60 : i % 60;
        time = hours + ':' + minutes + ' ' + ampm;
        return (min20.innerHTML = time);
      }
    }
    return (min16.innerHTML = '7:00 AM');
  }

  nextArrival10();
  nextArrival15();
  nextArrival16();
  nextArrival20();

  console.log(nextArrival10());
}
arrival();
setInterval(arrival, 1000); // Repeat every 5000 milliseconds (5 sec)

};
*/






/*
    function myTimer(m,h) {
      var h = (today.getHours() >= 12) ? today.getHours()-12 : today.getHours();
      var m = today.getMinutes()

      if (today.getMinutes() > 50){
        m = (m + 20) - 60;
        h = h +1;
        ampm = (today.getHours() + 1 >= 12) ? "PM" : "AM";

        return BusArrival.innerHTML = h + ":" + m + " " + ampm;
      } else if (today.getMinutes() > 40){
        m = (m + 20) - 60;
        h = h +1;
        ampm = (today.getHours() + 1 >= 12) ? "PM" : "AM";

        return BusArrival.innerHTML = h + ":" + "0" + m + " " + ampm;
      }else {
        var h = (today.getHours() >= 12) ? today.getHours()-12 : today.getHours();
        m = today.getMinutes() + 20;
        return BusArrival.innerHTML = h + ":" + m + " " + ampm;
      }
*/

/*----------  CLOCK   change eat to nav-time & BusArrival to currentT----------*/
// var time = document.getElementById("time") ;
// const today = new Date();
// if (today.getHours() > 5  && today.getHours() < 20) { //between 6 AM and 9:00 PM
//   var h = (today.getHours() >= 12) ? today.getHours()-12 : today.getHours();
//   var m = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
//   var ampm = (today.getHours() >= 12) ? "PM" : "AM";
//
//   return time.innerHTML = h + ":" + m + " " + ampm;
//
// }
