document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    // Handle form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh on form submission

        // Clear any previous error messages
        document.querySelectorAll('.error').forEach(function (error) {
            error.textContent = '';
        });

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        // Basic validation
        if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            isValid = false;
        }

        // Email validation using regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            document.getElementById("emailError").textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (message === "") {
            document.getElementById("messageError").textContent = "Please enter your message.";
            isValid = false;
        }

        // If the form is valid, simulate submission
        if (isValid) {
            console.log("Form submitted:", { name, email, message });

            // Show success message
            alert("Message sent successfully!");

            // Reset the form after submission
            contactForm.reset();
        }
    });
});
