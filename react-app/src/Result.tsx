function Result( {name = '', desc = ''} ) {
  return <div>
          <div>{name}</div>
          <div>{desc}</div>
        </div>;
}

export default Result;