//import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <nav>
        <Link to={`/unctrl`} className="link">
          Uncontrolled form
        </Link>
        <Link to={`/ctrl`} className="link">
          Controlled form
        </Link>
      </nav>
    </div>
  );
}

export default Home;
