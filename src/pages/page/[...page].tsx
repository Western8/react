import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import Header from '../components/header/Header';
import People from '../components/people/People';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import { ApiResult } from '../types';
import styles from '../../styles/Home.module.css';

function testError(): void {
  throw new Error('Ooops... something went wrong.');
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const baseUrl = `https://swapi.dev/api/people/`;
  const params = context.query.page;
  let page = '1';
  let inputValue = '';
  let idPerson = '';
  if (params) {
    page = params[0];
    const indSearch = params.indexOf('search');
    if (indSearch !== -1) {
      inputValue = params[indSearch + 1];
    }
    const indPersom = params.indexOf('person');
    if (indPersom !== -1) {
      idPerson = params[indPersom + 1];
    }
  }

  const urlParams: string[] = [];
  if (inputValue !== '') {
    urlParams.push(`search=${inputValue}`);
  }
  urlParams.push(`page=${page}`);
  const urlParamsStr = `?${urlParams.join('&')}`;
  const url = `${baseUrl}${urlParamsStr}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  let dataDetails = null;
  if (idPerson) {
    const urlDetails = `${baseUrl}${idPerson}`
    const resDetails = await fetch(urlDetails);
    dataDetails = await resDetails.json()
  }

  return {
    props: {
      page,
      inputValue,
      data,
      dataDetails,
    }
  };
};

export default function Page({ page, inputValue, data, dataDetails }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const contResults = data.results.map((item: ApiResult) => {
    return {
      name: item.name,
      url: item.url,
      desc: '',
    }
  });

  return (
    <ErrorBoundary>
      <div className={styles.home}>
        <Header testError={testError} children={[]}></Header>
        <People contResults={contResults} page={page} inputValue={inputValue} dataDetails={dataDetails} />
      </div>
    </ErrorBoundary>
  )
}