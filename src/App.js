import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employeepage" element={<EmployeePage />} />
          <Route path="/employees/:id" element={<EmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;