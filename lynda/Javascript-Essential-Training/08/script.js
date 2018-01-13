const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0,];
var interval;
var testStarted = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function timeFormat(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
};

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timeFormat(timer[0]) + ":" + timeFormat(timer[1]) + ":" + timeFormat(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let enteredText = testArea.value;
    let originTextMatch = originText.substring(0,enteredText.length);

    if (enteredText == originText){
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    }else{
        if (enteredText == originTextMatch){
            testWrapper.style.borderColor = "#65CCf3";     
        }else{
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
};

// Start the timer:
function startTimer(){
    let enteredTextLength = testArea.value.length;
    if (enteredTextLength === 0 && !testStarted){
       testStarted = true;
        interval = setInterval(runTimer, 10);
    }

};

// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    theTimer.innerHTML = "00:00:00";
    testStarted = false;
    testArea.value = "";
    testArea.placeholder = "The clock starts when you start typing.";
    testWrapper.style.borderColor = "grey";
};


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", spellCheck, false)
resetButton.addEventListener("click", reset, false)