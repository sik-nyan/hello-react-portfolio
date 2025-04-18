import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CountDisp({count, onInclement, onReset}){
  return (
    <div>
      <h2>カウント：{count}</h2>
      <button onClick={onInclement}>+1</button>
      <button onClick={onReset}>リセット</button>
    </div>
  );
}

// 親要素
function App() {
  // カウントアップの状態管理
  const [count, setCount] = useState(0);
  // インクリメント処理
  const handleInclement = () => setCount(count + 1);
  // リセット処理
  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>Hello, React!</h1>
      
      <CountDisp
        count={count}
        onInclement={handleInclement}
        onReset={handleReset}      
      />
    </div>
  );
}

export default App;