// import React from "react";
import { ApiResult, Results } from "./types";

function Top() {

  let inputValue: HTMLInputElement | null;

  async function runSearch() {

    const url = `https://swapi.dev/api/people/?search=${inputValue?.value}`;
    const response = await fetch(url);
    const result = await response.json();

    const results: Results = result.results.map((item: ApiResult) => {
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
    console.log('results', results);
  }

  return <div>
          <input ref={node => { inputValue = node; }} placeholder="Enter search text"/>
          <button onClick={runSearch}>Search</button>
        </div>;
}

export default Top;