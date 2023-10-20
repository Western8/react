import React from 'react';
import Result from './Result';
import { SearchResult, SearchResults } from './types';
import './Bottom.css';

class Bottom extends React.Component<SearchResults, {}> {
  constructor(props: SearchResults) {
    super(props);
  }

  render() {
    return (
      <div className="bottom">
        {this.props.searchResults.map((item: SearchResult) => (
          <Result name={item.name} desc={item.desc} />
        ))}
      </div>
    );
  }
}

export default Bottom;
