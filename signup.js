document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;


    alert(`Signup successful!\nEmail: ${email}\nRole: ${role}`);

    
    window.location.href = 'DAMAR WEBPAGE/landing/landing.html'; 
});