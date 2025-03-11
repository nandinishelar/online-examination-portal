"use strict";
function displayDate() {
   
    var today = new Date()
    var curHr = today.getHours()
    document.getElementById("tm").innerHTML = curHr + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    document.getElementById("btn").innerHTML = "Current time is !!!!";
  
    if (curHr < 12) {
        document.getElementById("image").src = "good morning.webp";
        document.getElementById("wish").innerHTML = "Good Morning";
    }
    else if(curHr<=16 && curHr >= 12) {
        document.getElementById("Body").style.backgroundImage = "url('sun.jpg')";
        document.getElementById("wish").innerHTML = "Good Afternoon";
    }
}