import { Result, PropsBottom } from '../../types';
import CompResult from '../compResult/CompResult';
import Pagination from '../pagination/Pagination';
import React from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import GlobalContext from '../../Context';
import './Bottom.css';

function Bottom(props: PropsBottom) {
  const [showDetails, setShowDetails] = React.useState(false);
  const contResults = React.useContext(GlobalContext).contResults;

  function changeShowDetails(): void {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bottom">
      <div className="bottom-list" onClick={changeShowDetails}>
        {contResults.map((item: Result) => (
          <CompResult result={item} page={props.page} key={item.url} />
        ))}
        <Pagination page={props.page} />
      </div>
      <div className={`bottom-details${showDetails ? '' : ' hidden'}`}>
        <Outlet context={setShowDetails} />
      </div>
    </div>
  );
}

export function Details() {
  const params = useParams();
  const idPerson = params.person;
  const setShowDetails: (showDetails: boolean) => void = useOutletContext();

  const initPerson: Result = { url: '', name: '', desc: '', };
  const [person, setState] = React.useState(initPerson);

  function getDetails(): void {
    let urlPerson = 'https://swapi.dev/api/people/';
    urlPerson = `${urlPerson}${idPerson}/`;
    fetch(urlPerson)
      .then((response) => response.json())
      .then((result) => {
        const res = {
          name: result.name,
          url: result.url,
          desc: '',
        };
        const desc: string[] = [];
        desc.push(`Birth year: ${result.birth_year}`);
        desc.push(`Height: ${result.height}`);
        desc.push(`Mass: ${result.mass}`);
        desc.push(`Skin color: ${result.skin_color}`);
        desc.push(`Hair color: ${result.hair_color}`);
        desc.push(`Eye color: ${result.eye_color}`);
        res.desc = desc.join(', ');
        setState(res);
      });
  };

  getDetails();

  return (
    <div className="details">
      <h3>{`Name: ${person.name}`}</h3>
      <p>{`Description: ${person.desc}`}</p>
      <p>{`url: ${person.url}`}</p>
      <button onClick={() => setShowDetails(false)}>Close</button>
    </div>
  );
}

export default Bottom;
