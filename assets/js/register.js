// 可以加上一些表單驗證等功能
document.querySelector("form").addEventListener("submit", function(event) {
    // 這裡可以放表單驗證邏輯
    console.log("表單已送出");
});

// 模擬後端資料庫
const userDatabase = {};

// 註冊功能
document.querySelector(".register form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止預設提交動作

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const phone = event.target.phone.value.trim();
    const gender = event.target.gender.value;
    const bday = event.target.bday.value;
    const q1 = event.target.q1.value.trim();
    const q2 = event.target.q2.value.trim();

    // 簡單表單驗證
    if (!email || !password || !phone || !gender || !bday || !q1 || !q2) {
        alert("請完整填寫所有欄位！");
        return;
    }

    // 檢查是否已註冊
    if (userDatabase[email]) {
        alert("此電子郵件已被註冊！");
        return;
    }

    // 儲存使用者資料
    userDatabase[email] = { password, phone, gender, bday, q1, q2 };
    alert("註冊成功！請使用帳號登入。");

    // 清空表單
    event.target.reset();
});

// 登入功能
document.querySelector(".login form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止預設提交動作

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    // 檢查帳號與密碼
    if (userDatabase[email] && userDatabase[email].password === password) {
        alert("登入成功！");
        // 跳轉到首頁
        window.location.href = "..//../pages/member.html";
    } else {
        alert("帳號或密碼錯誤！");
    }
});