const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// 設置 SendGrid API 密鑰
sgMail.setApiKey('你的SendGrid API密鑰');

// 提供靜態檔案，確保 'public' 資料夾存在並包含前端檔案（如 index.html）
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

// 模擬搶票的路由
app.post('/buy-ticket', async (req, res) => {
    const success = Math.random() > 0.5; // 隨機決定成功或失敗
    const { email, seat, quantity } = req.body;

    if (success) {
        // 搶票成功，發送郵件通知
        const msg = {
            to: email, // 收件人
            from: '你的發件人電子郵件', // 必須是已驗證的發件人地址
            subject: '您的購票成功通知',
            text: `恭喜！您已成功購買 ${seat} 區的門票 ${quantity} 張！`,
            html: `<p>您好，</p>
                   <p>恭喜您成功購買 <strong>${seat}</strong> 區的門票 <strong>${quantity}</strong> 張！</p>
                   <p>請攜帶此郵件作為憑證。</p>`,
        };

        try {
            await sgMail.send(msg);
            res.json({ message: "成功搶到票！電子票券已寄送。" });
        } catch (error) {
            console.error('發送郵件時出錯:', error);
            res.status(500).json({ message: "搶票成功，但郵件發送失敗，請稍後再試。" });
        }
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
