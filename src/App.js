import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Bank from './components/bank'
import Employees from './components/employees';
import Home from "./components/home"
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className='App-header'>

      <BrowserRouter>
        <Navbar />
        <nav >
          <Link to="/">Home</Link>
          <Link to="/bank">Bank</Link>
          <Link to="/employees">Employees</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes >
      </BrowserRouter>
    </div>

  );
}

export default App;
