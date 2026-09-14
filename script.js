const passwordInput = document.getElementById('password-input');
const goBtn = document.getElementById('go-btn');
const secretContent = document.getElementById('secret-content');
const secretPassword = "12345"; 

goBtn.addEventListener('click', function() {
    if (passwordInput.value === secretPassword) {
        passwordInput.style.display = 'none';
        goBtn.style.display = 'none';
        
        secretContent.style.display = 'block';
    } else {
        alert("Sai rồi nhé!");
    }
});
