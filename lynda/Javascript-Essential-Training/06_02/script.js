const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



var date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log("hour: " + hour + "Minute: " + minutes + "seconds: " + seconds);

let hourPosition = (hour*360/12)+(minutes*(360.60)/12);
let minutesPosition = (minutes*360/60)+(seconds*(360/60)/60);
let secondsPosition = seconds*360/60;

function ClockAnimation(){  

    hourPosition = hourPosition+(3/360);
    minutesPosition = minutesPosition+(1/60)*6; 
    secondsPosition = secondsPosition+6;


    

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutesPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondsPosition + "deg)";
}

var interval = setInterval(ClockAnimation, 1000);







