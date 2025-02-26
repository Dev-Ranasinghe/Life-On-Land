document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitFeedback();
    });
});

function previewFeedback() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const category = document.getElementById('category').value;
    const firstTime = document.getElementById('firstTime').value;
    const informative = document.getElementById('informative').value;
    const recommend = document.getElementById('recommend').value;

    let valid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    } else if (!validateName(name)) {
        document.getElementById('nameError').textContent = 'Name must contain only alphabetical characters';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (!email || !validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email is required and must be valid';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!rating || rating < 1 || rating > 5) {
        document.getElementById('ratingError').textContent = 'Rating must be between 1 and 5';
        valid = false;
    } else {
        document.getElementById('ratingError').textContent = '';
    }

    if (!comment) {
        document.getElementById('commentError').textContent = 'Comment is required';
        valid = false;
    } else {
        document.getElementById('commentError').textContent = '';
    }

    if (!firstTime) {
        document.getElementById('firstTimeError').textContent = 'This field is required';
        valid = false;
    } else {
        document.getElementById('firstTimeError').textContent = '';
    }

    if (!informative) {
        document.getElementById('informativeError').textContent = 'This field is required';
        valid = false;
    } else {
        document.getElementById('informativeError').textContent = '';
    }

    if (!recommend) {
        document.getElementById('recommendError').textContent = 'This field is required';
        valid = false;
    } else {
        document.getElementById('recommendError').textContent = '';
    }

    if (!valid) {
        return;
    }

    const previewContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comment:</strong> ${comment}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>First Time:</strong> ${firstTime}</p>
        <p><strong>Informative:</strong> ${informative}</p>
        <p><strong>Recommend:</strong> ${recommend}</p>
    `;
    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('previewContainer').classList.remove('hidden');
    document.getElementById('feedbackForm').classList.add('hidden');
}

function editFeedback() {
    document.getElementById('previewContainer').classList.add('hidden');
    document.getElementById('feedbackForm').classList.remove('hidden');
}

function validateName(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function emailSend() {

    // Get the form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const category = document.getElementById('category').value;
    const firstTime = document.getElementById('firstTime').value;
    const informative = document.getElementById('informative').value;
    const recommend = document.getElementById('recommend').value;

    // Construct the email body
    const emailBody = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comment:</strong> ${comment}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>First Time:</strong> ${firstTime}</p>
        <p><strong>Informative:</strong> ${informative}</p>
        <p><strong>Recommend:</strong> ${recommend}</p>
    `;
    
      Email.send({

        Host: '',
        Username: '',
        Password: '',
        To: '',
        From: '', 
        Subject: "",
        Body: emailBody,
        }).then(
            message => {
                if (message === 'OK') {
                    alert("Feedback submitted successfully!");
                    // Reset the form
                    document.getElementById('feedbackForm').reset();
                    // Hide confirmation message
                    document.getElementById('confirmationMessage').classList.add('hidden');
                    // Show the form again
                    document.getElementById('feedbackForm').classList.remove('hidden');

                    document.getElementById('previewContainer').classList.add('hidden');
                } else {
                    alert("Failed to submit feedback. Please try again later.");
                }
            }
        ).catch(error => {
            console.error("Error sending email:", error);
            alert("Failed to submit feedback due to an unexpected error. Please try again later.");
        });
}

// backward button
document.getElementById('backward-button').addEventListener('click', function() {
    history.back();
});

