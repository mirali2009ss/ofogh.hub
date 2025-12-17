// رمز عبور ثابت مورد نظر شما
const CORRECT_PASSWORD = "1"; // !!! این مقدار را با رمز دلخواه خودتان جایگزین کنید !!!

function checkPassword() {
    // گرفتن مقادیر از المان‌های HTML
    const inputElement = document.getElementById('password-input');
    const modal = document.getElementById('password-modal');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    
    // گرفتن رمز وارد شده توسط کاربر
    const enteredPassword = inputElement.value;

    if (enteredPassword === CORRECT_PASSWORD) {
        // اگر رمز درست بود:
        // 1. جعبه مودال را پنهان کن
        modal.style.display = 'none';
        
        // 2. محتوای اصلی سایت را نمایش بده
        mainContent.style.display = 'block';
        
        // 3. پیام خطا را پاک کن
        errorMessage.textContent = '';
        
        // *نکته امنیتی: می‌توانید از Storage هم برای جلوگیری از نمایش مجدد مودال در همان نشست استفاده کنید.
        
    } else {
        // اگر رمز اشتباه بود:
        errorMessage.textContent = 'رمز عبور اشتباه است. دوباره تلاش کنید.';
        inputElement.value = ''; // خالی کردن ورودی برای تلاش مجدد
    }
}
