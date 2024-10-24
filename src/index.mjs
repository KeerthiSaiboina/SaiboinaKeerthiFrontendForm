import "./styles.css";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevent form from submitting the default way
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission (e.g., via API or just displaying the success message)
    if (name && email && message) {
      // Display the success message
      document.getElementById("successMessage").style.display = "block";

      // Clear form fields
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields");
    }
  });
