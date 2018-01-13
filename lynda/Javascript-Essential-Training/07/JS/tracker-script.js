const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const SQUARE = document.querySelector('.square');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    SQUARE.style.left = horizontalPosition - 46 + 'px';
    SQUARE.style.top = verticalPosition - 46 + 'px';
};

function changeColorOnTouch(targetElement) {
    targetElement.style.backgroundColor = "green";
    targetElement.style.borderColor = "green";
};

function resetColorState(targetElement){
    targetElement.removeAttribute("style");

};

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', function(){changeColorOnTouch(this)}, false);
SQUARE.addEventListener('mouseenter',function(){changeColorOnTouch(this)}, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){resetColorState(this)}, false);
SQUARE.addEventListener('mouseleave', function(){resetColorState(this)}, false);