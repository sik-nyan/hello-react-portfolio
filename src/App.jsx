import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import TodoList from './pages/TodoList';
import InputTextCount from './pages/InputTextCount';
import CountdownTimer from './pages/CountdownTimerDisp';
import String from './pages/String';
import InputTextDisp from './pages/InputTextDisp';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/inputText" element={<InputTextCount />} />
      <Route path="/countdownTimer" element={<CountdownTimer />} />
      <Route path="/string" element={<String />} />
      <Route path="/inputTextDisp" element={<InputTextDisp />} />
    </Routes>
  );
}

export default App;