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
// show or hide the contact information when the button is clicked
function toggleInfo() {
    var info = document.getElementById("info");

    if (info.style.display == "none") {
        info.style.display = "block";
        info.style.color = "SeaGreen";
    }
    else {
        info.style.display = "none";
    }
}