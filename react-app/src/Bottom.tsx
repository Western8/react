import Result from './Result';
import { SearchResult, SearchResults } from './types';
import './Bottom.css';

function Bottom(props: SearchResults) {
  return (
    <div className="bottom">
      {props.searchResults.map((item: SearchResult) => (
        <Result url={item.url} name={item.name} desc={item.desc} />
      ))}
    </div>
  );
}

export default Bottom;
