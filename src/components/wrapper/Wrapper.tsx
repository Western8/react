import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setPage } from '../store/swSlice'; 
import Header from '../header/Header';
import Bottom from '../bottom/Bottom';
import './Wrapper.css';
// import { apiResults } from '../../test/mocks';

function Wrapper() {
  const dispatch = useAppDispatch();

  const params = useParams();
  const page: string = params.page ? params.page : '1';
  dispatch(setPage({page}));
  
  function testError(): void {
    throw new Error('Ooops... something went wrong.');
  }

  return (
    <div className="wrapper">
      <Header testError={testError}></Header>
      <Bottom />
    </div>
  );
}

export default Wrapper;
