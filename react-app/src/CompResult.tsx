import { Result } from './types';
import './Bottom.css';

function CompResult(props: Result) {
  // static defaultProps: Partial<Result>;

  return (
    <div className="result">
      <div className="result-name">{props.name}</div>
      <div className="result-desc">{props.desc}</div>
    </div>
  );
}

CompResult.defaultProps = { url: '', name: '', desc: '' };

export default CompResult;
