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
  console.log('data apiDetails ', data);
  console.log('isFetching details', isFetching);
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
      <h3 key="">{`Name: ${person.name}`}</h3>,
      <p key="">{`Birth year: ${person.birth_year}`}</p>,
      <p key="">{`Height: ${person.height}`}</p>,
      <p key="">{`Mass: ${person.mass}`}</p>,
      <p key="">{`Skin color: ${person.skin_color}`}</p>,
      <p key="">{`Hair color: ${person.hair_color}`}</p>,
      <p key="">{`Eye color: ${person.eye_color}`}</p>,
      <p key="">{`url: ${person.url}`}</p>,
      <button onClick={() => setShowDetails(false)} key="">
        Close
      </button>,
    ];
  }

  return <div className="details">{sectionDetais}</div>;
}

export default Details;
