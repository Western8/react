import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/Header.module.css'
import { RunSearch } from '../../types';


//function Header(props: RunSearch) {
function Header(props) {
  const [stateLimit, setStateLimit] = React.useState('10');

  const inputValue = React.useRef<HTMLInputElement>(null);
  const select = React.useRef<HTMLSelectElement>(null);

  const { push } = useRouter();

  function runSearch() {
    if (inputValue.current && inputValue.current.value) {
      push(`/page/1/search/${inputValue.current.value}`);
    }
  }

  return (
    <div className={styles.header}>
      <input ref={inputValue} placeholder="Enter search text" />
      <select ref={select} value={stateLimit} >
        limit
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <button onClick={runSearch}>Search</button>
      <button onClick={() => props.testError()}>Test Error</button>
      {props.children}
    </div>
  );
}

export default Header;
