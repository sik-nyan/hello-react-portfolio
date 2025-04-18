// src/components/CountDisp.jsx

function CountDisp({count, onInclement, onDeclement, onReset}){
    return (
      <div>
        <h2>カウント：{count}</h2>
        <button onClick={onInclement}>+1</button>
         
        <button onClick={onDeclement}>-1</button>
         
        <button onClick={onReset}>リセット</button>
      </div>
    );
  }

  export default CountDisp;