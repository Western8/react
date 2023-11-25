import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import People from '../components/people/People';

function testError(): void {
  throw new Error('Ooops... something went wrong.');
}

export const getServerSideProps = (async (context) => {
  // console.log('!!!!!!!!!!!!!!!! context.query ', context.query);
  const baseUrl = `https://swapi.dev/api/people/`;  
  const params = context.query.page;
  const page = params[0];
  let inputValue = '';
  const indSearch = params.indexOf('search');
  if (indSearch !== -1) {
    inputValue = params[indSearch + 1];
  }
  let idPerson = '';
  const indPersom = params.indexOf('person');
  if (indPersom !== -1) {
    idPerson = params[indPersom + 1];
  }

  const urlParams: string[] = [];
  if (inputValue !== '') {
    urlParams.push(`search=${inputValue}`);
  }
  urlParams.push(`page=${page}`);
  const urlParamsStr = `?${urlParams.join('&')}`;
  const url = `${baseUrl}${urlParamsStr}`;

  const res = await fetch(url);
  const data = await res.json()
  // console.log('!!!!!!!!!!!!!!!!!!!!!! url ', url);
  // console.log('!!!!!!!!!!!!!!!!!!!!!! data ', data);

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
});

export default function Page({ page, inputValue, data, dataDetails }) {
  const router = useRouter();

  const contResults = data.results.map((item: ApiResult) => {
    return {
      name: item.name,
      url: item.url,
      desc: '',
    }
  });

  return (
    <div className="home">
      <Header testError={testError}></Header>
      <People contResults={contResults} page={page} inputValue={inputValue} dataDetails={dataDetails} />
    </div>
  )
}