// formvalidator.js

// Add const to handle HTML Elements:
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messsageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// global variable
let isValid= false;


function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // console.log(isValid);
    
    // Style of main message for an error
    message.textContent = "Please fill out all fields.";
    message.style.color = 'red';
    messsageContainer.style.borderColor = 'red';
};

// event = e
function processFormData(e) {
    e.preventDefault();
    // console.log(e);

    // Validate Form
    // function 
    validateForm();
    
    // store form data
};

// Event Listener
form.addEventListener('submit', processFormData);