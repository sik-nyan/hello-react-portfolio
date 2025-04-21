// src/components/CountdownTimer.jsx
import { useEffect, useState } from 'react';

// カウントダウン処理
function CountdownTimer() {
    // 残り秒数
    const [seconds, setSeconds] = useState(10);
    // 動いているか、止まっているかの管理
    const [isRunning, setIsRunning] = useState(false);
  
    // スタートボタンが押されたら isRunning を true に
    const handleStart = () => setIsRunning(true);

    // リセットボタンで seconds を 10 に戻し、isRunning を false に
    const handleReset = () => {
        setSeconds(10);
        setIsRunning(false);
    }

    // useEffect でカウントダウン処理
    useEffect(() => {
        let timer;

        // setIntervalで秒数を1ずつ減らす
        if (isRunning && seconds > 0){
            timer = setInterval(() => {
                setSeconds(prev => prev - 1);// 前の状態の数字から１引く
                
            }, 1000); // 1000ミリ秒＝1秒
        }



        // 0になったら停止
        if (seconds === 0) {
            setIsRunning(false); // 自動で停止
          }

        return () => clearInterval(timer); // 前のタイマーをきっちり止める
        // ！　毎回 useEffect が呼ばれるたびに新しいsetIntervalが作られるので、returnで前のIntervalを止める必要がある
    }, [isRunning, seconds]);

    return (
        <>
            <h2>カウントダウン：{seconds}</h2>
            <button onClick={handleStart}>スタート</button>
            <button onClick={handleReset}>リセット</button>
        </>
    );
}

export default CountdownTimer;
