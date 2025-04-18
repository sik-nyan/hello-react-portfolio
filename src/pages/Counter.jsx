// src/pages/Counter.jsx
import { useState } from 'react';
import CountDisp from '../components/CountDisp';
import { useNavigate } from 'react-router-dom'; // ← 追加！

function Counter() {
  const [count, setCount] = useState(0);

  const handleInclement = () => setCount(count + 1);
  const handleDeclement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const navigate = useNavigate(); // ← フックでナビゲーター取得！

  return (
    <div>
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
