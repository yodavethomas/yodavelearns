//Chapter 4 super file

//Named Function
function findLargestFraction(a,b){
    var result;
    a>b ? result = ["firstFraction",a] : result = ["secondFraction", b]; 
    return result; // local scope
}

var firstFraction =  3/4; //global scope
var secondFraction = 5/7;
var fractionResult = findLargestFraction(firstFraction,secondFraction);

console.log("First fraction result:",firstFraction);
console.log("Second fraction result:",secondFraction);
console.log("Fraction "+fractionResult[0]+  " with a value of: "+fractionResult[1]+" is the largest fraction!");

//Anonymous Function
var theBiggest = function(a,b) {
    var annonResult;
    a>b ? annonResult = ["a", a] : annonResult = ["b", b];
    return annonResult;
};

console.log(theBiggest(7/9,13/25));

//Immediately invoked function
var invokeTheBiggest = (function(a,b) {
    var annonResult;
    a>b ? annonResult = ["a", a] : annonResult = ["b", b];
    return annonResult;
})(7/9,13/25);

console.log(invokeTheBiggest);

//let and const

const CONSTANTVARIABLE = 5;
console.log(CONSTANTVARIABLE);

function logScope(){
    let localVar = 2;
    if (localVar){
        let localVar = "I'm different";
        console.log("nested localVar:",localVar);
    }
    console.log("logscope localVar:",localVar);
}

logScope();

//Objects
var course = {
    title : "Javascript Essential Training",
    instructor : "Morten Rand-Hendricsken",
    level : "1",
    published : true,
    views: 0,

    updateViews: function (){
        return ++course.views;
    }
};


//Constructors
function Course(title,instructor,level,published,views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views;
    };

}


//var courseO1 = new Course("Javascript Essential Training","Morten Rand-Hendricksen",1,true,0);
//var courseO2 = new Course("Up and Running With ES6","Eve Porcello",1,true,5000);
var courses = [
    new Course("Javascript Essential Training","Morten Rand-Hendricksen",1,true,0),
    new Course("Up and Running With ES6","Eve Porcello",1,true,5000)
];

console.log(courses);

//dot notation
//course.title
//bracket
//course["title"];
//course["wp:image];

//Closures
// function in a function that relies on outside functions to work
function doSomeMath() {
	var a = 5;
	var b = 4;

    function multiply(){
      var result = a*b;
      return result;
    }

     return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);

//Example:

function pxToEms(pixels){
    var baseValue = 16;

    function calculateEm(){
        return pixels/baseValue;
    }

    return calculateEm;
}

var smallSize = pxToEms(12);
var mediumSize = pxToEms(18);
var largeSize = pxToEms(24);
var xLargeSize = pxToEms(32);

console.log("small size: ", smallSize());
console.log("medium size: ", mediumSize());
console.log("large size: ", largeSize());
console.log("extra large size: ", xLargeSize());