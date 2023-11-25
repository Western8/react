import React from 'react';
import { Result, ApiResult } from '../../types';
import CompResult from '../compResult/CompResult';
import Pagination from '../pagination/Pagination';
import Details from '../details/Details';
import styles from '../../../styles/People.module.css'

function People({ page, inputValue, contResults, dataDetails }) {
  const [showDetails, setShowDetails] = React.useState(false);
  function changeShowDetails(): void {
    setShowDetails(!showDetails);
  }
  const sectionList: JSX.Element[] = contResults.map((item: Result) => (
    <CompResult result={item} page={page} key={item.url} inputValue={inputValue} />
  ));

  return (
    <div className={styles.people}>
      <div className={styles.peopleList} onClick={changeShowDetails}>
        {sectionList}
        <Pagination page={page} />
      </div>
      {/* <div className={`people-details${dataDetails ? '' : ' hidden'}`}> */}
      <div className={styles.peopleDetails + ' ' + (dataDetails ? '' : styles.hidden)}>      
        <Details dataDetails={dataDetails} />
        {/* <Outlet context={setShowDetails} /> */}
      </div>
    </div>
  );
}

export default People;
