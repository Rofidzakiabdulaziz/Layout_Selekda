document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form from submitting the traditional way
  
      // Retrieve form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // For simplicity, log form data to the console
      console.log('Form Submitted');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Optionally, you can add form validation or submit data to a server here
  
      // Reset the form
      form.reset();
    });
  });
  