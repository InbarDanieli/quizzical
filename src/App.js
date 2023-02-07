import './App.css';
import HomePage from './components/home page/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import QuizGame from './components/quiz game/QuizGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='quiz' element={<QuizGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
