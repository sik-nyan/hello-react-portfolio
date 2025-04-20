// src/components/useTodo.js
import { useState } from 'react';

function useTodo() {
    // 入力文字の状態管理
    const [input, setInput] = useState('');
    // 入力したタスク(配列)の管理
    const [tasks, setTasks] = useState([]);

    // 入力したタスクを配列に追加する処理
    const handleAdd = () => {
        if (input.trim() === '') return;
        // コピーした現状の配列の最後に追加対象の文字列を追加して、状態管理で更新
        setTasks([...tasks, input]);
        // 入力文字の方はリセット
        setInput('');
    };

    // タスクの削除
    const handleDelete = (index) => {
        // 指定したインデックス以外のタスクだけで配列を作り直して、状態管理で更新
        setTasks(tasks.filter((task, i) => {
            return i !== index;
        }));
    };

    // 変数を返す
    return {
        input,
        setInput,
        tasks,
        handleAdd,
        handleDelete,
    };
}

export default useTodo;