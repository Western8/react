import { IPropsResult } from '../../types';
import { Link } from 'react-router-dom';
import '../people/People.css';

function CompResult({ result, page }: IPropsResult) {
  const idPerson = result.url.split('/').at(-2);

  return (
    <Link to={`/page/${page}/person/${idPerson}`} className="result">
      <div className="result-name">{result.name}</div>
      <div className="result-desc">{result.url}</div>
    </Link>
  );
}

CompResult.defaultProps = { url: '', name: '', desc: '' };

export default CompResult;
