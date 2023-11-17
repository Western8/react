import { PropsResult } from '../../types';
import { Link } from 'react-router-dom';
import '../bottom/Bottom.css';

function CompResult(props: PropsResult) {
  const idPerson = props.result.url.split('/').at(-2);

  return (
    <Link to={`/page/${props.page}/person/${idPerson}`} className="result">
      <div className="result-name">{props.result.name}</div>
      <div className="result-desc">{props.result.url}</div>
    </Link>
  );
}

CompResult.defaultProps = { url: '', name: '', desc: '' };

export default CompResult;
