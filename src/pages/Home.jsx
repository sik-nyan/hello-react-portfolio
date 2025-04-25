// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../index.css'
import '../Pages.css';

function Home() {
  return (
    <div className="container">
      <h1>React 練習ページ集</h1>
      <p>スキルアップのためのReact練習用リポジトリです。<br/>
        学んだことをGitHubにまとめています。</p>
      <ul>
        <li><Link to="/counter">カウンター練習</Link></li>
        <li><Link to="/todo">ToDoList練習</Link></li>
        <li><Link to="/inputText">リアルタイム文字カウンター</Link></li>
        <li><Link to="/countdownTimer">カウントダウンタイマー</Link></li>
        <li><Link to="/string">文字を表示</Link></li>
        <li><Link to="/inputTextDisp">入力文字をリアルタイム表示</Link></li>
        {/* 今後ここにどんどん追加 */}
      </ul>
    </div>
  );
}

export default Home;
