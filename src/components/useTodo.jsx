// src/components/useTodo.js
import { useState } from 'react';

function useTodo() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => {
        return i !== index;
      }));
  };

  return {
    input,
    setInput,
    tasks,
    handleAdd,
    handleDelete,
  };
}

export default useTodo;