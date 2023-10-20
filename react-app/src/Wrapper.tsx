import React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import { ApiResult, SearchResults } from './types';
import './Wrapper.css';

class Wrapper extends React.Component {
  constructor() {
    super({});
  }

  state = {
    results: [],
  };

  runSearch = (value: string): void => {
    let url = `https://swapi.dev/api/people/`;
    if (value !== '') {
      url = `${url}?search=${value}`;
    } 

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const results: SearchResults = result.results.map((item: ApiResult) => {
          const res = {
            name: item.name,
            desc: '',
          };
          const desc: string[] = [];
          desc.push(`Birth year: ${item.birth_year}`);
          desc.push(`Height: ${item.height}`);
          desc.push(`Mass: ${item.mass}`);
          desc.push(`Skin color: ${item.skin_color}`);
          desc.push(`Hair color: ${item.hair_color}`);
          desc.push(`Eye color: ${item.eye_color}`);
          res.desc = desc.join(', ');
          return res;
        });
        this.setState({ results: results });
      });
  };

  render() {
    return (
      <div className="wrapper">
        <Top runSearch={this.runSearch}></Top>
        <Bottom searchResults={this.state.results}></Bottom>
      </div>
    );
  }
}

export default Wrapper;
