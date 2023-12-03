import { IPropsResult } from '../../types';
import Link from 'next/link';
import styles from '../../../styles/People.module.css';

function CompResult({ result, page, inputValue, dataDetails }: IPropsResult) {
  const idPerson = result.url.split('/').at(-2);

  let url = `/page/${page}`;
  if (!dataDetails) {
    url = `${url}/person/${idPerson}`;
  }
  if (inputValue) {
    url = `${url}/search/${inputValue}`;
  }

  return (
    <Link href={url} className={styles.result}>
      <div className={styles.resultName}>{result.name}</div>
      <div className={styles.resultDesc}>{result.url}</div>
    </Link>
  );
}

export default CompResult;
