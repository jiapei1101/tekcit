const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 提供靜態檔案，確保 'public' 資料夾存在並包含你的前端檔案（index.html 等）
app.use(express.static('public')); 
app.use(express.json());

// 模擬搶票的路由
app.post('/buy-ticket', (req, res) => {
    // 模擬搶票邏輯，隨機決定成功或失敗
    const success = Math.random() > 0.5; 
    if (success) {
        res.json({ message: "成功搶到票！" });
    } else {
        res.json({ message: "搶票失敗，請再試一次。" });
    }
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行在 http://localhost:${PORT}`);
});
