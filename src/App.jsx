import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import InputTextDisp from './pages/InputTextDisp';
import CountdownTimer from './pages/CountdownTimerDisp';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/inputText" element={<InputTextDisp />} />
      <Route path="/countdownTimer" element={<CountdownTimer />} />
    </Routes>
  );
}

export default App;