//Chapter 3 super file (all the examples in one file)

var a, b, sum, negInteger, escQuote, theSunIsWarm, emptyInside, justAnotherVariable, theNumbersMatch, pens, pensSlice, result, arrayString;
a = 5;
b = 4;
sum = a + b;
negInteger = -3.14159265359; //integer 
escQuote = "Quotes can also be \"escaped\"."; //string
theSunIsWarm = true; //boolean
emptyInside = null; //object (of undefined)
justAnotherVariable; //undefined

//if else
if (a == b){
    theNumbersMatch = true;
}else{
    theNumbersMatch = false;
}

console.log("Do the numbers match? "+theNumbersMatch);

//arary
pens = ["red","blue","green","orange"];

var fourthPen = pens[3];

console.log("Before: ", pens);

//Methods:
//Reverse
//pens.reverse();

// Remove the first value of the array:
//pens.shift();

//Add comma seperated list of values in front
//pens.unshift("purple","black")

// Remvoe last value 
//pens.pop();

//Add comma seperated list of values to the end
//pens.push("perrywinkle",pink);

//Find the specified position (pos) and remve n number of times
//pens.splice(2,1);

console.log("Pens After: ", pens);
newPens = pens.slice();
//console.log("new pens",newPens);

result = pens.indexOf("orange",1);

console.log("The value is", pens[result]);

arrayString = pens.join(" - ");
console.log(arrayString);