const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // 提供靜態檔案
app.use(express.json());

app.post('/buy-ticket', (req, res) => {
    // 模擬搶票邏輯
    const success = Math.random() > 0.5; // 隨機成功或失敗
    if (success) {
        res.json({ message: "成功搶到票！" });
    } else {
        res.json({ message: "搶票失敗，請再試一次。" });
    }
});

app.listen(PORT, () => {
    console.log(`伺服器運行在 http://localhost:${PORT}`);
});
