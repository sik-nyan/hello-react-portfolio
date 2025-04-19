// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../index.css'
import '../Pages.css';

function Home() {
  return (
    <div className="container">
      <h1>React 練習ページ集</h1>
      <p>スキルアップのためのReact練習用リポジトリです。<br/>
        将来的に自社開発を目指しており、学んだことをGitHubにまとめています。</p>
      <ul>
        <li><Link to="/counter">カウンター練習</Link></li>
        <li><Link to="/todo">ToDoList練習</Link></li>
        <li><Link to="/inputText">リアルタイム文字カウンター</Link></li>
        {/* 今後ここにどんどん追加できる！ */}
      </ul>
    </div>
  );
}

export default Home;
