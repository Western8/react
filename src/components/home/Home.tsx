import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setPage } from '../store/swSlice';
import Header from '../header/Header';
import People from '../people/People';
import './Home.css';

function Home() {
  const dispatch = useAppDispatch();

  const params = useParams();
  const page: string = params.page ? params.page : '1';
  dispatch(setPage({ page }));

  function testError(): void {
    throw new Error('Ooops... something went wrong.');
  }

  return (
    <div className="home">
      <Header testError={testError}></Header>
      <People />
    </div>
  );
}

export default Home;
