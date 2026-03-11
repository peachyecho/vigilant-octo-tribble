document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // This creates the email trigger for Leo
    const subject = encodeURIComponent(`Peachy Echo v1.2 Inquiry from ${name}`);
    const body = encodeURIComponent(`Sender Email: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:Leo@peachyecho.com?subject=${subject}&body=${body}`;
    
    alert("Redirecting to your email app to message Leo...");
});
