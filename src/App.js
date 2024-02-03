import { Route, Routes } from 'react-router-dom';
import './App.css';
import Result from './Result';
import Quiz from './Quiz';
import Instruction from './Instruction';
import Welcome from './Welcome';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContextProvider from './UserContext';

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path='/result' element={<Result/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/instruction' element={<Instruction/>} />
        <Route path='/' element={<Welcome/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
