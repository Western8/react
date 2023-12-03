import Link from 'next/link';
import { IPropsPagination } from '../../types';
import styles from '../../../styles/Pagination.module.css'

function Pagination({ page }: IPropsPagination) {
  const pagePrev = +page - 1;
  const pageNext = +page + 1;

  return (
    <div className={styles.pageBtns}>
      <nav>
        <Link href={`/page/${pagePrev}`} className={styles.pageBtn}>
          Prev
        </Link>
        <Link href={`/page/${pageNext}`} className={styles.pageBtn}>
          Next
        </Link>
      </nav>
    </div>
  );
}

export default Pagination;
