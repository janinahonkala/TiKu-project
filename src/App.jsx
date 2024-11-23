import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Customers from './pages/customers';
import Projects from './pages/projects';
import Calendar from './pages/calendar';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/calendar">Calendar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
