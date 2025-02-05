document.addEventListener("DOMContentLoaded", function () {
    // Header Animation
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.9)";
            header.style.transition = "background 0.5s ease-in-out";
        } else {
            header.style.background = "black";
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.createElement("p"); // Create a success message element
    successMessage.textContent = "Message Sent Successfully!";
    successMessage.style.color = "lightgreen";
    successMessage.style.marginTop = "10px";
    successMessage.style.display = "none"; // Initially hidden

    contactForm.appendChild(successMessage); // Add message below the form

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Show success message
        successMessage.style.display = "block";

        // Reset the form after submission
        contactForm.reset();

        // Hide the success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
