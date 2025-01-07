document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact form");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      console.log("Form Submitted!");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
  
      alert("Thank you for contacting us! We'll get back to you soon.");
      contactForm.reset();
    });
  });
  