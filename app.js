document.getElementById('buy-ticket').addEventListener('click', () => {
    fetch('/buy-ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("伺服器回應失敗");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').innerText = data.message; // 顯示伺服器返回的消息
    })
    .catch(error => {
        console.error('發生錯誤:', error);
        document.getElementById('message').innerText = "發生錯誤，請稍後再試。";
    });
});
