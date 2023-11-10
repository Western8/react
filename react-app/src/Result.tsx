import { SearchResult } from './types';
import './Bottom.css';

function Result(props: SearchResult) {
  // static defaultProps: Partial<SearchResult>;

  return (
    <div className="result">
      <div className="result-name">{props.name}</div>
      <div className="result-desc">{props.desc}</div>
    </div>
  );
}

// Result.defaultProps = { name: '', desc: '' };

export default Result;
