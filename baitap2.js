// Lấy phần tử nút  
const toggleBtn = document.getElementById('toggleBtn');

// Thêm sự kiện click cho nút để chuyển đổi chế độ  
toggleBtn.addEventListener('click', function () {
    // Kiểm tra xem trang có chế độ tối không  
    if (document.body.classList.contains('dark-mode')) {
        // Nếu có, chuyển sang chế độ sáng  
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        // Nếu không, chuyển sang chế độ tối  
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
});

// Mặc định bắt đầu ở chế độ sáng  
document.body.classList.add('light-mode');  