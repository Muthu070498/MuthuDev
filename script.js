document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Example API endpoint (Replace with your own)
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    // Clear the response message
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'none';

    // Send form data to the API using fetch
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.style.display = 'block';
        responseMessage.className = 'response-message success';
        responseMessage.innerText = 'Message sent successfully!';
    })
    .catch(error => {
        responseMessage.style.display = 'block';
        responseMessage.className = 'response-message error';
        responseMessage.innerText = 'There was an error sending your message. Please try again.';
    });
});
