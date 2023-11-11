import './Pagination.css';

import { Link } from 'react-router-dom';

type TypeNav = {
  next: string
}

function Nav(props: TypeNav) {
  return (
    <nav>
      <Link to={props.next}>Next</Link>
    </nav>
  );
}

function Pagination() {
  return (
    <div className="bottom">
      <div className='page-btns'>
        <button>Prev</button>
        {/* <NavLink to={`${props.next}`}>Next</NavLink> */}
        {/* <Nav next={props.next}></Nav> */}
      </div>
    </div>
  );
}

export default Pagination;
