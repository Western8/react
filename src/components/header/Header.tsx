import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useGetResultsQuery } from '../store/swApi';
import {
  setInputValue,
  setLimit,
  setResults,
  setApiResults,
  setLoadingList,
} from '../store/swSlice';
import { RunSearch } from '../../types';
import './Header.css';

function Header(props: RunSearch) {
  const dispatch = useAppDispatch();
  const [stateLimit, setStateLimit] = React.useState('10');

  const inputValue = React.useRef<HTMLInputElement>(null);
  const select = React.useRef<HTMLSelectElement>(null);

  const page = useAppSelector((state) => state.sw.page);
  const stateInputValue = useAppSelector((state) => state.sw.inputValue);
  const { data, isFetching } = useGetResultsQuery({ page, stateInputValue });

  function runSearch() {
    dispatch(setLoadingList(isFetching));
    if (!isFetching) {
      dispatch(setApiResults(data.results));
      dispatch(setResults());
    }
  }

  /*
  React.useEffect((): void => {
    const item = localStorage.getItem('inputValue');
    if (item && inputValue.current) {
      inputValue.current.value = JSON.parse(item);
      dispatch(setInputValue({value: inputValue.current.value}));
    }
    props.runSearch(inputValue.current ? inputValue.current?.value : '');
  });
*/

  function handleInput() {
    let value = '';
    if (inputValue.current && inputValue.current.value) {
      localStorage.setItem('inputValue', JSON.stringify(inputValue.current.value));
      value = inputValue.current.value;
    } else {
      localStorage.setItem('inputValue', '');
    }
    dispatch(setInputValue({ value }));
  }

  function handleLimit(e: ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setStateLimit(target.value);
    dispatch(setLimit({ value: target.value }));
  }

  return (
    <div className="header">
      <input ref={inputValue} onChange={handleInput} placeholder="Enter search text" />
      <select ref={select} value={stateLimit} onChange={(e) => handleLimit(e)}>
        limit
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <button onClick={runSearch}>Search</button>
      <button onClick={() => props.testError()}>Test Error</button>
    </div>
  );
}

export default Header;
