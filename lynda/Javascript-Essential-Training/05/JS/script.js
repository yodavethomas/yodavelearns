// Chapter 5.5
const CTAELEMENT = document.querySelector(".cta a");

if(CTAELEMENT.hasAttribute("target")){
    console.log(CTAELEMENT.getAttribute("target"));
}else{
    CTAELEMENT.setAttribute("target","_blank");
}

//

console.log(CTAELEMENT.attributes);


//Chapter 5.6
const FEATURED = document.querySelector(".featured-image"); //target
const THEIMAGE = FEATURED.querySelector("img"); //image

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText);

// append alt to caption element
captionElement.append(altText);

//append caption element to dom
FEATURED.append(captionElement);

//Clear alt text
THEIMAGE.setAttribute("alt","");

