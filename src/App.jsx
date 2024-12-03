import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Customers from './pages/Customers.jsx';
import Projects from './pages/Projects.jsx';
import Calendar from './pages/Calendar.jsx';
import { NavbarWrapper, NavLink } from './styles/Navbar.styles';

function App() {
  return (
    <Router>
      <NavbarWrapper>
        <NavLink as={Link} to="/">
          Home
        </NavLink>
        <NavLink as={Link} to="/customers">
          Customers
        </NavLink>
        <NavLink as={Link} to="/projects">
          Projects
        </NavLink>
        <NavLink as={Link} to="/calendar">
          Calendar
        </NavLink>
      </NavbarWrapper>
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
