const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// 提供靜態檔案，確保 'public' 資料夾存在並包含前端檔案（如 index.html）
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());

// 模擬搶票的路由
app.post('/buy-ticket', (req, res) => {
    const success = Math.random() > 0.5; // 隨機決定成功或失敗
    if (success) {
        res.json({ message: "成功搶到票！" });
    } else {
        res.json({ message: "搶票失敗，請再試一次。" });
    }
});

// 根路由預設至 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行在 http://localhost:${PORT}`);
});
