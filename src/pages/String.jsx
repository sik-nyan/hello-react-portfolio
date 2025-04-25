// src/pages/String.jsx
import '../index.css';
import '../Pages.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


// ボタンを押すと、ページに今日の日付が表示される
function String () {
    // 文言の状態管理
    const [string, setString] = useState('');
    // 戻るボタン
    const navigate = useNavigate();

    // ボタンを押した時の処理
    const handleClick = () => {
        // 今日の日付を取得する
        const today = new Date()

        // 日付を整形
        const year = today.getFullYear()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)

        setString('今日の日付：' + year + '年' + month + '月' + day + '日')
    }
    
    return (
        <div className='container'>
            <h1>文字の表示</h1>
            <h3>{string}</h3>
            <button onClick={handleClick}>文章を表示</button>
            <br/>
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );
}

export default String;