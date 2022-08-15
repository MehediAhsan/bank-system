document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'mehedi@gmail.com' && password === 'password'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please enter correct email and password');
    }
})