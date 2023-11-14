import './Pagination.css';
import { Link } from 'react-router-dom';
import { PropsPagination } from './types';

function Pagination(props: PropsPagination) {
  const pagePrev = +props.page - 1;
  const pageNext = +props.page + 1;  

  return (
    <div className="page-btns">
      <nav>
        <Link to={`/page/${pagePrev}`} className="page-btn">Prev</Link>
        <Link to={`/page/${pageNext}`} className="page-btn">Next</Link>
      </nav>
    </div>
  );
}

export default Pagination;
