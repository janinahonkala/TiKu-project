import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Home = () => (
  <div>
    <h1>TiKu - Home</h1>
    <div className="home-buttons">
      <Button variant="contained" color="primary" component={Link} to="/customers">
        Go to Customers
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/projects">
        Go to Projects
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/calendar">
        Go to Calendar
      </Button>
    </div>
  </div>
);

export default Home;
