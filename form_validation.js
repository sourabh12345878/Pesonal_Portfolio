// form-validation.js
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Check if the name, email, and message are filled out
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false; // Prevent form submission
    }
    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }
    return true; // Form is valid, proceed with submission
}
