import React from 'react';
import { RunSearch } from './types';
import './Top.css';

class Top extends React.Component<RunSearch, {}> {
  inputValue: HTMLInputElement | null = null;

  constructor(props: RunSearch) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(): void {
    const item = localStorage.getItem('inputValue');
    if (item && this.inputValue) {
      this.inputValue.value = JSON.parse(item);
    }
    this.props.runSearch(this.inputValue?.value ? this.inputValue?.value : '');
    // this.props.testError();
  }

  handleInput() {
    if (this.inputValue && this.inputValue.value) {
      localStorage.setItem('inputValue', JSON.stringify(this.inputValue.value));
    } else {
      localStorage.setItem('inputValue', '');
    }
  }

  render() {
    return (
      <div className="top">
        <input
          ref={(node) => {
            this.inputValue = node;
          }}
          onChange={this.handleInput}
          placeholder="Enter search text"
        />
        <button
          onClick={() => this.props.runSearch(this.inputValue?.value ? this.inputValue?.value : '')}
        >
          Search
        </button>
        <button
          onClick={() => this.props.testError()}
        >
          Test Error
        </button>
      </div>
    );
  }
}

export default Top;
