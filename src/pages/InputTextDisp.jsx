// src/pages/InputTextDisp.jsx
import '../index.css';
import '../Pages.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function InputTextDisp () {
    // 入力文字の状態管理
    const [text, setText] = useState('');
    // 戻るボタン用
    const navigate = useNavigate();


    // html
    return (
        <div className='container'>
            <h1>リアルタイム入力文字表示</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>入力した文字：{text}</p>
            <button onClick={() => setText('')}>リセット</button>
            <br/>
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );
}

export default InputTextDisp