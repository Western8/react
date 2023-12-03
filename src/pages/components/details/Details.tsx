import React from 'react';
import { useRouter } from 'next/navigation';
import { Person, IPropsDetails } from '../../types';
import styles from '../../../styles/People.module.css';

export function Details({ dataDetails, page, inputValue }: IPropsDetails) {
  const { push } = useRouter();

  function setShowDetails() {
    let url = `/page/${page}`;
    if (inputValue) {
      url = `${url}/search/${inputValue}`;
    }
    push(url);
  }

  const initPerson: Person = {
    url: '',
    name: '',
    desc: '',
    birth_year: '',
    height: '',
    mass: '',
    skin_color: '',
    hair_color: '',
    eye_color: '',
  };
  let person = initPerson;

  if (dataDetails) {
    Object.assign(person, dataDetails);
  }

  let sectionDetais: JSX.Element[] = [<></>];
  sectionDetais = [
    <h3 key="0">{`Name: ${person.name}`}</h3>,
    <p key="1">{`Birth year: ${person.birth_year}`}</p>,
    <p key="2">{`Height: ${person.height}`}</p>,
    <p key="3">{`Mass: ${person.mass}`}</p>,
    <p key="4">{`Skin color: ${person.skin_color}`}</p>,
    <p key="5">{`Hair color: ${person.hair_color}`}</p>,
    <p key="6">{`Eye color: ${person.eye_color}`}</p>,
    <p key="7">{`url: ${person.url}`}</p>,
    <button onClick={setShowDetails} key="8">
      Close
    </button>,
  ];

  return <div className={styles.peopleDetails}>{sectionDetais}</div>;
}

export default Details;
