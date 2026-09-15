const passwordInput = document.getElementById('password-input');
// Tìm nút Go dựa vào cấu trúc HTML hiện tại mà không cần đổi gì trong file html
const goBtn = document.querySelector('.password button');
const secretContent = document.getElementById('secret-content');

const secretPassword = "12345"; // Đổi mật khẩu tùy ý bạn

if (goBtn) {
    goBtn.addEventListener('click', function() {
        if (passwordInput.value === secretPassword) {
            passwordInput.style.display = 'none';
            goBtn.style.display = 'none';
            
            if (secretContent) {
                secretContent.style.display = 'block';
            }
        } else {
            alert("Sai mật khẩu rồi, thử lại nhé!");
            passwordInput.value = "";
            passwordInput.focus();
        }
    });
}
