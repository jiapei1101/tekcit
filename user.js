window.onload = function() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        displayUserInfo(JSON.parse(storedUser));
    }
};

// 顯示使用者頭像與名稱
function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    const userName = user.emailPhone.includes('@') ? user.emailPhone.split('@')[0] : user.emailPhone;
    
    userInfoDiv.innerHTML = `
        <img src="default-avatar.png" alt="User Avatar" class="avatar">
        <span class="user-name">${userName}</span>
        <button onclick="logout()">登出</button>
    `;
}

// 登出功能
function logout() {
    localStorage.removeItem('user');
    window.location.reload(); // 重新加載頁面以更新 UI
}
