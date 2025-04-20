// src/pages/Counter.jsx
import { useState } from 'react';
import CountDisp from '../components/CountDisp';
import { useNavigate } from 'react-router-dom'; // ← 追加！
import '../index.css'
import '../Pages.css';

// カウント処理
function Counter() {
  // 数字の状態管理変数
  const [count, setCount] = useState(0);

  // インクリメント
  const handleInclement = () => setCount(count + 1);
  // デクリメント
  const handleDeclement = () => setCount(count - 1);
  // リセット
  const handleReset = () => setCount(0);
  // 戻るボタン用フック
  const navigate = useNavigate(); // ← フックでナビゲーター取得！

  // html記述分
  return (
    <div className="container">
      <h1>カウンター練習ページ</h1>
      <CountDisp
        count={count}
        onInclement={handleInclement}
        onDeclement={handleDeclement}
        onReset={handleReset}
      />
      
      {/* 戻るボタン */}
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
}

export default Counter;
