import CompResult from './CompResult';
import { Result, PropsBottom } from './types';
import './Bottom.css';
import Pagination from './Pagination';

function Bottom(props: PropsBottom) {
  return (
    <div className="bottom">
      {props.results.map((item: Result) => (
        <CompResult url={item.url} name={item.name} desc={item.desc} />
      ))}
      <Pagination page={props.page}/>
    </div>
  );
}

export default Bottom;
