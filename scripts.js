document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can add AJAX call to submit the form if required, but for now, we'll show a message
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = `Thank you, ${name}. We have received your message and will get back to you soon.`;
    formMessage.style.color = "green";

    // Clear form fields
    document.getElementById("contact-form").reset();
});
