import React from 'react';
import { RunSearch } from './types';
import './Top.css';
import GlobalContext from './Context';

function Top(props: RunSearch) {
  const inputValue = React.useRef<HTMLInputElement>(null);
  const { contInputValue, setInputValue } = React.useContext(GlobalContext);

  React.useEffect((): void => {
    const item = localStorage.getItem('inputValue');
    if (item && inputValue.current) {
      inputValue.current.value = JSON.parse(item);
    }
    props.runSearch(inputValue.current ? inputValue.current?.value : '');
  });

  function handleInput() {
    let value = '';
    if (inputValue.current && inputValue.current.value) {
      localStorage.setItem('inputValue', JSON.stringify(inputValue.current.value));
      value = inputValue.current.value;
    } else {
      localStorage.setItem('inputValue', '');
    }
    setInputValue(value);
  }

  return (
    <div className="top">
      <input
        ref={inputValue}
        onChange={handleInput}
        placeholder="Enter search text"
      />
      <button onClick={() => props.runSearch(contInputValue)}>
        Search
      </button>
      <button onClick={() => props.testError()}>Test Error</button>
    </div>
  );
}

export default Top;
