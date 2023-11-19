import React from 'react';
import { Outlet } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useGetResultsQuery } from '../store/swApi';
import { setApiResults, setLoadingList, setResults } from '../store/swSlice';
import { Result, ApiResult } from '../../types';
import CompResult from '../compResult/CompResult';
import Pagination from '../pagination/Pagination';
import './People.css';

function People() {
  const dispatch = useAppDispatch();

  const [showDetails, setShowDetails] = React.useState(false);
  function changeShowDetails(): void {
    setShowDetails(!showDetails);
  }

  const page = useAppSelector((state) => state.sw.page);
  const inputValue = useAppSelector((state) => state.sw.inputValue);
  const { data, isFetching } = useGetResultsQuery({ page, inputValue });
  console.log('data apiResults ', data);
  console.log('isFetching', isFetching);
  dispatch(setLoadingList(isFetching));
  let contResults: Result[] = [];
  if (!isFetching) {
    dispatch(setApiResults(data.results));
    dispatch(setResults());
    contResults = data.results.map((item: ApiResult) => {
      return {
        name: item.name,
        url: item.url,
        desc: '',
      };
    });
  }

  let sectionList: JSX.Element[] = [<></>];
  const isLoadingList = useAppSelector((state) => state.sw.isLoadingList);
  if (isLoadingList) {
    sectionList = [<RingLoader color="#541068" size="150px" key="" />];
  } else {
    sectionList = contResults.map((item: Result) => (
      <CompResult result={item} page={page} key={item.url} />
    ));
  }

  return (
    <div className="people">
      <div className="people-list" onClick={changeShowDetails}>
        {sectionList}
        <Pagination page={page} />
      </div>
      <div className={`people-details${showDetails ? '' : ' hidden'}`}>
        <Outlet context={setShowDetails} />
      </div>
    </div>
  );
}

export default People;
