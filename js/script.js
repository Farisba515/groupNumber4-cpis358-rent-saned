// script.js : external JavaScript file for Rent Saned
// change the picture and the text when the mouse is over the image
function showNext() {
    document.getElementById("equip").src = "images/walker.png";
    document.getElementById("equipName").innerHTML = "Walker";
}

function showFirst() {
    document.getElementById("equip").src = "images/wheelchair.png";
    document.getElementById("equipName").innerHTML = "Wheelchair";
}
function validateLoginForm() {
    var emailField = document.getElementById("userEmail");
    var passField = document.getElementById("userPassword");
    var feedback = document.getElementById("loginFeedback");

    feedback.innerHTML = "";
    feedback.style.color = "red";

    if (emailField.value == "") {
        feedback.innerHTML = "Error: Please enter your email address.";
        emailField.style.borderColor = "red";
        emailField.focus();
        return false;
    }
    else {
        emailField.style.borderColor = "seagreen";
    }

    if (passField.value == "") {
        feedback.innerHTML = "Error: Please enter your password.";
        passField.style.borderColor = "red";
        passField.focus();
        return false;
    }
    else {
        passField.style.borderColor = "seagreen";
    }

    feedback.style.color = "lightgreen";
    feedback.innerHTML = "Login successful!";
    window.alert("Welcome back to Rent Saned!");
    return true;
}
// Function to validate the customer registration form
function validateSignUpForm() {
    var nameField = document.getElementById("fullName");
    var emailField = document.getElementById("userEmail");
    var phoneField = document.getElementById("userPhone");
    var passField = document.getElementById("userPassword");
    var termsBox = document.getElementById("termsAgree");
    var feedback = document.getElementById("formFeedback");

    feedback.innerHTML = "";
    feedback.style.color = "red";

    if (nameField.value == "") {
        feedback.innerHTML = "Error: Please enter your full name.";
        nameField.style.borderColor = "red";
        nameField.focus();
        return false;
    }
    else {
        nameField.style.borderColor = "seagreen";
    }

    if (emailField.value == "") {
        feedback.innerHTML = "Error: Please enter your email address.";
        emailField.style.borderColor = "red";
        emailField.focus();
        return false;
    }
    else {
        emailField.style.borderColor = "seagreen";
    }

    if (phoneField.value == "") {
        feedback.innerHTML = "Error: Please enter your phone number.";
        phoneField.style.borderColor = "red";
        phoneField.focus();
        return false;
    }
    else {
        phoneField.style.borderColor = "seagreen";
    }

    if (passField.value == "") {
        feedback.innerHTML = "Error: Please create a password.";
        passField.style.borderColor = "red";
        passField.focus();
        return false;
    }
    else {
        passField.style.borderColor = "seagreen";
    }

    if (termsBox.checked == false) {
        feedback.innerHTML = "Error: You must agree to the rental terms.";
        return false;
    }

    feedback.style.color = "lightgreen";
    feedback.innerHTML = "Registration successful!";
    window.alert("Account created successfully!");
    return true;
}
function toggleInfo(id) {
    var item = document.getElementById(id);

    if (item.style.display == "none") {
        item.style.display = "block";
        item.style.color = "SeaGreen";
    }
    else {
        item.style.display = "none";
    }
}