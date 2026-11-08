// script.js : external JavaScript file for Rent Saned
// change the picture and the text when the mouse is over the image
function showNext() {
    document.getElementById("equip").src = "images/walker.png";
    document.getElementById("equipName").innerHTML = "Walker";
}

// return the first picture and text when the mouse leaves the image
function showFirst() {
    document.getElementById("equip").src = "images/wheelchair.png";
    document.getElementById("equipName").innerHTML = "Wheelchair";
}
