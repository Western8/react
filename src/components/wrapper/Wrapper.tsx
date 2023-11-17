import React from 'react';
import { useParams } from 'react-router-dom';
import Top from '../top/Top';
import Bottom from '../bottom/Bottom';
import { ApiResult, Result, SearchResults } from '../../types';
import GlobalContext from '../../Context';
import './Wrapper.css';

function Wrapper() {

  const params = useParams();
  const page: string = params.page ? params.page : '1';

  const initSearchResults: SearchResults = { results: [] };
  const [searchResults, setState] = React.useState(initSearchResults);
  const { setResults } = React.useContext(GlobalContext);

  function runSearch(value: string): void {
    let url = `https://swapi.dev/api/people/?`;
    const urlParams: String[] = [];
    if (value !== '') {
      urlParams.push(`search=${value}`);

    }
    urlParams.push(`page=${page}`);
    url = `${url}${urlParams.join('&')}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const results: Result[] = result.results.map((item: ApiResult) => {
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
          // res.desc = desc.join(', ');
          return res;
        });
        const newSearchResults: SearchResults = {
          results: results,
        };
        setState(newSearchResults);
        setResults(results);
      });
  };

  function testError(): void {
    throw new Error('Ooops... something went wrong.');
  }

  return (
    <div className="wrapper">
      <Top runSearch={runSearch} testError={testError}></Top>
      <Bottom results={searchResults.results} page={page}></Bottom>
    </div>
  );
}

export default Wrapper;
