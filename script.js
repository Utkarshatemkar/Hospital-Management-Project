
// Show the appointment modal
function openModal() {
    document.getElementById("appointmentModal").style.display = "block";
}

// Close the appointment modal
function closeModal() {
    document.getElementById("appointmentModal").style.display = "none";
}

// Handle form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Basic validation
    if (name && email && date && time) {
        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("appointmentForm").reset(); // Reset the form fields

        // Hide the form and close modal after 2 seconds
        setTimeout(closeModal, 2000);
    } else {
        alert("Please fill out all the required fields.");
    }
});

// Contact form submission event
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    // Simple form validation
    if (name && email && message) {
        // Hide the form and show confirmation message
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("contactConfirmationMessage").style.display = "block";
    } else {
        // Show error message if form is incomplete
        document.getElementById("contactErrorMessage").style.display = "block";
    }
});
