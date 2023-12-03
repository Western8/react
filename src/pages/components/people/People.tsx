import React from 'react';
import { Result, IPropsPeople } from '../../types';
import CompResult from '../compResult/CompResult';
import Pagination from '../pagination/Pagination';
import Details from '../details/Details';
import styles from '../../../styles/People.module.css'

function People({ page, inputValue, contResults, dataDetails }: IPropsPeople ) {
  const sectionList: JSX.Element[] = contResults.map((item: Result) => (
    <CompResult result={item} page={page} key={item.url} inputValue={inputValue} dataDetails={dataDetails}/>
  ));

  return (
    <div className={styles.people}>
      <div className={styles.peopleList} >
        {sectionList}
        <Pagination page={page} />
      </div>
      <div className={styles.peopleDetails + ' ' + (dataDetails ? '' : styles.hidden)}>      
        <Details dataDetails={dataDetails} page={page} inputValue={inputValue} />
      </div>
    </div>
  );
}

export default People;
