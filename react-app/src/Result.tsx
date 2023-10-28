import React from 'react';
import { SearchResult } from './types';
import './Bottom.css';

class Result extends React.Component<SearchResult, {}> {
  static defaultProps: Partial<SearchResult>;

  constructor(props: SearchResult) {
    super(props);
  }

  render() {
    return (
      <div className="result">
        <div className="result-name">{this.props.name}</div>
        <div className="result-desc">{this.props.desc}</div>
      </div>
    );
  }
}

Result.defaultProps = { name: '', desc: '' };

export default Result;
