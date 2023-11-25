import { useAppDispatch } from '../store/hooks';
import { setPage } from '../store/swSlice';
import Header from '../header/Header';
import People from '../people/People';

function Home1({ contResults, page, inputValue, dataDetails }) {
//  const dispatch = useAppDispatch();
//  const params = useParams();
//  const page: string = params.page ? params.page : '1';
//  dispatch(setPage({ page }));

  function testError(): void {
    throw new Error('Ooops... something went wrong.');
  }

  return (
   <div className="home1">
       <div>Homeeeeeeee1111122</div>

      <Header testError={testError}></Header>
      <People contResults={contResults} page={page} inputValue={inputValue} dataDetails={dataDetails}/>
    </div>
  );
}

export default Home1;
