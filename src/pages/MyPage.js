import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

function MyPage() {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  const email = "user@example.com"; // サーバーから取得したユーザーのメールアドレスを使う

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h2>マイページ</h2>
      <div>
        <QRCode value={email} />
      </div>
      <div>
        <h3>今日の日付: {currentDateTime.date}</h3>
        <h3>現在時刻: {currentDateTime.time}</h3>
      </div>
      <div>
        <h3>サブスクリプション期間: 2024/12/31まで</h3>
      </div>
    </div>
  );
}

export default MyPage;
