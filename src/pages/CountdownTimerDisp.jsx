// src/pages/CountdownTimerDisp.jsx
import '../index.css';
import '../Pages.css';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';


function CountdownTimerDisp () {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>カウントダウンタイマー</h1>
            
            <CountdownTimer />
            <button onClick={() => navigate(-1)}>戻る</button>
        </div>
    );
}  

export default CountdownTimerDisp;