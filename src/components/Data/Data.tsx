//import './Data.css';
import { IDataProps } from "../../types";

function Data( { data }: IDataProps) {
  return (
    <div className="data">
      <h3>Data</h3>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

export default Data;
