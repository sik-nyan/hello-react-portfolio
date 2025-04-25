import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import InputTextDisp from './pages/InputTextDisp';
import CountdownTimer from './pages/CountdownTimerDisp';
import String from './pages/String';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/inputText" element={<InputTextDisp />} />
      <Route path="/countdownTimer" element={<CountdownTimer />} />
      <Route path="/string" element={<String />} />
    </Routes>
  );
}

export default App;