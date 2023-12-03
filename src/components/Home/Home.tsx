//import './Home.css';
import { Link } from 'react-router-dom';
import DataList from '../DataList/DataList';

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
      <DataList/>
    </div>
  );
}

export default Home;
