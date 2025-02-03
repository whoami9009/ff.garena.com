document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the email and password to your server for authentication
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Sign in successful!');
});

function openLocalFile() {
    window.location.href = "file:///E:/programe/Fising/password/index.html";
}