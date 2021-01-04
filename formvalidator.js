// formvalidator.js

// Add const to handle HTML Elements:
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messsageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// global variable
let isValid= false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // console.log(isValid);
    
    // Style of main message for an error
    if (!isValid) {
        message.textContent = "Please fill out all fields.";
        message.style.color = 'red';
        messsageContainer.style.borderColor = 'red';
        return;
    } 

    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match!';
        message.style.color = 'red';
        messsageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    };

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messsageContainer.style.borderColor = 'green';
    };
};

// prepare form data for storage
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
};

// event = e
function processFormData(e) {
    e.preventDefault();
    // console.log(e);

    // Validate Form
    // function 
    validateForm();
    
    // store form data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    };
};

// Event Listener
form.addEventListener('submit', processFormData);