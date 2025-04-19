// src/pages/TodoList.jsx
import '../index.css';
import '../Pages.css';
import { useNavigate } from 'react-router-dom';
import useTodo from '../components/useTodo'; // ← useTodo に修正

function TodoList () {
  const navigate = useNavigate();

  const {
    input,
    setInput,
    tasks,
    handleAdd,
    handleDelete,
  } = useTodo(); // ← ここも useTodo() に修正！

  return (
    <div>
      <h1>TodoList練習ページ</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="やることを入力"
      />
      <button onClick={handleAdd}>追加</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>削除</button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
}

export default TodoList;