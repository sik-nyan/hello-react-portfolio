// src/pages/useInputText.jsx
import { useState } from 'react'; // これが必要！

function useInputText(){
    const [inputCnt, setInput] = useState(0);
    const [inputText, setInputText] = useState('');

    // 入力文字が変わったとき
    const handleChange = (e) => {
        const value = e.target.value;
        setInputText(value);
        
        // 日本語などの正確な文字数カウント
        const segmenterJa = new Intl.Segmenter('ja-JP', { granularity: 'grapheme' });
        const segments = segmenterJa.segment(value);
        setInput(Array.from(segments).length);
    }

    // 変数を返す
    return {
        inputText,
        inputCnt,
        handleChange
    };
}

export default useInputText;