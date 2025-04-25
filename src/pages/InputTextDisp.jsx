// src/pages/InputTextDisp.jsx
import '../index.css';
import '../Pages.css';
import { useNavigate } from 'react-router-dom';
import useInputText from '../components/useInputText';


function InputTextDisp () {
    // 戻るボタン用
    const navigate = useNavigate();

    const {
        inputText,
        inputCnt,
        handleChange
    } = useInputText();

    return (
        <div className="container">
            <h1>リアルタイム文字数カウンター</h1>
            <h2>カウント：{inputCnt}</h2>
            <textarea
                value={inputText}
                onChange={handleChange}
                placeholder="テキストを入力"
                rows="5"
            />
            <p>現在の文字数：{inputCnt}</p>
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );


}

export default InputTextDisp;