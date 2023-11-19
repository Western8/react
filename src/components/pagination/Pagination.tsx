import './Pagination.css';
import { Link } from 'react-router-dom';
import { IPropsPagination } from '../../types';

function Pagination({ page }: IPropsPagination) {
  const pagePrev = +page - 1;
  const pageNext = +page + 1;

  return (
    <div className="page-btns">
      <nav>
        <Link to={`/page/${pagePrev}`} className="page-btn">
          Prev
        </Link>
        <Link to={`/page/${pageNext}`} className="page-btn">
          Next
        </Link>
      </nav>
    </div>
  );
}

export default Pagination;
