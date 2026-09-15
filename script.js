document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password-input');
    const goBtn = document.getElementById('go-btn');
    const secretContent = document.getElementById('secret-content');
    
    // Mật khẩu bí mật của bạn (có thể đổi tùy ý)
    const secretPassword = "12345"; 

    if (goBtn) {
        goBtn.addEventListener('click', function(event) {
            // Ngăn chặn form submit lại trang nếu nút nằm trong form
            event.preventDefault(); 

            if (passwordInput.value === secretPassword) {
                // Ẩn ô nhập mật khẩu và nút bấm đi cho gọn gàng
                passwordInput.style.display = 'none';
                goBtn.style.display = 'none';
                
                // Hiển thị nội dung bí mật lên
                if (secretContent) {
                    secretContent.style.display = 'block';
                }
            } else {
                alert("Sai mật khẩu rồi, thử lại nhé!");
                passwordInput.value = ""; // Xóa ô nhập để nhập lại cho nhanh
                passwordInput.focus();
            }
        });
    }
});
