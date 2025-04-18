import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// カウントアップ・ダウン処理
import CountDisp from './components/CountDisp';


// 親要素
function App() {
  // カウントアップの状態管理
  const [count, setCount] = useState(0);
  // インクリメント処理
  const handleInclement = () => setCount(count + 1);
  // デクリメント処理
  const handleDeclement = () => setCount(count - 1);
  // リセット処理
  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>Hello, React!</h1>
      
      <CountDisp
        count={count}
        onInclement={handleInclement}
        onDeclement={handleDeclement}
        onReset={handleReset}      
      />
    </div>
  );
}

export default App;