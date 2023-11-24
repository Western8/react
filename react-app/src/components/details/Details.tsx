import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useGetDetailsQuery } from '../store/swApi';
import { setLoadingDetails } from '../store/swSlice';
import { Person } from '../../types';

export function Details() {
  const params = useParams();
  const idPerson = params.person;
  const dispatch = useAppDispatch();
  const setShowDetails: (showDetails: boolean) => void = useOutletContext();

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
  const [person] = React.useState(initPerson);

  const { data, isFetching } = useGetDetailsQuery({ idPerson });
  dispatch(setLoadingDetails(isFetching));
  if (!isFetching) {
    Object.assign(person, data);
  }

  let sectionDetais: JSX.Element[] = [<></>];
  const isLoadingDetails = useAppSelector((state) => state.sw.isLoadingDetails);
  if (isLoadingDetails) {
    sectionDetais = [<CircleLoader color="#541068" size="150px" key="" />];
  } else {
    sectionDetais = [
      <h3 key="0">{`Name: ${person.name}`}</h3>,
      <p key="1">{`Birth year: ${person.birth_year}`}</p>,
      <p key="2">{`Height: ${person.height}`}</p>,
      <p key="3">{`Mass: ${person.mass}`}</p>,
      <p key="4">{`Skin color: ${person.skin_color}`}</p>,
      <p key="5">{`Hair color: ${person.hair_color}`}</p>,
      <p key="6">{`Eye color: ${person.eye_color}`}</p>,
      <p key="7">{`url: ${person.url}`}</p>,
      <button onClick={() => setShowDetails(false)} key="8">
        Close
      </button>,
    ];
  }

  return <div className="details">{sectionDetais}</div>;
}

export default Details;
