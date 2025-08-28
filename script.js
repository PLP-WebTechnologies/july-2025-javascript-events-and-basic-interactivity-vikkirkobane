// Part 1: Event Handling
const button = document.getElementById("themeToggle");
button.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Part 2: Counter Game
let count = 0;
const counterDisplay = document.getElementById("counterDisplay");
const incrementButton = document.getElementById("incrementButton");

incrementButton.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

// Part 3: Collapsible FAQ
const faqHeaders = document.querySelectorAll(".faq-header");
faqHeaders.forEach(header => {
    header.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("active");
    });
});

// Part 4: Form Validation
const form = document.getElementById("myForm");
const errorMessage = document.getElementById("errorMessage");

form.onsubmit = function(event) {
    let isValid = true;
    errorMessage.textContent = ""; // Clear previous messages

    // Name validation
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        isValid = false;
        errorMessage.textContent += "Name is required.\n";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage.textContent += "Please enter a valid email.\n";
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        isValid = false;
        errorMessage.textContent += "Password must be at least 6 characters.\n";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
};
