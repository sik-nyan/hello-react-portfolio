// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>React 練習ページ集</h1>
      <ul>
        <li><Link to="/counter">カウンター練習</Link></li>
        {/* 今後ここにどんどん追加できる！ */}
      </ul>
    </div>
  );
}

export default Home;
