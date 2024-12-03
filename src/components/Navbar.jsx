import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  background: #f0f0f0;
  padding: 1rem;
`;

const Navbar = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/customers">Customers</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/calendar">Calendar</Link>
  </Nav>
);

export default Navbar;
