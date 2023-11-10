import React from 'react';
import Top from './Top';
import Bottom from './Bottom';
import { ApiResult, SearchResult } from './types';
// import { ApiResult, SearchResults, DefaultProps } from './types';
import './Wrapper.css';

function Wrapper() {

  const initSearchResults: SearchResult[] = [];
  const [results, setState] = React.useState(initSearchResults);

  function runSearch(value: string): void {
    let url = `https://swapi.dev/api/people/`;
    if (value !== '') {
      url = `${url}?search=${value}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const results: SearchResult[] = result.results.map((item: ApiResult) => {
          const res = {
            name: item.name,
            url: item.url,
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
        setState(results);
      });
  };

  function testError(): void {
    throw new Error('Ooops... something went wrong.');
  }

  return (
    <div className="wrapper">
      <Top runSearch={runSearch} testError={testError}></Top>
      <Bottom searchResults={results}></Bottom>
    </div>
  );
}

export default Wrapper;
