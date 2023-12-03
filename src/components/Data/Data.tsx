//import './Data.css';
import { IDataProps } from "../../types";

function Data( { data, last }: IDataProps) {
  return (
    <div className={`data ${last ? 'last' : ' '}`}>
      <h3>Data</h3>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>E-mail: {data.email}</p>
      <p>Password: {data.password1}</p>
      <p>Gender: {data.gender}</p>
      <p>Accept T&C: {data.accept}</p>
      <p>img: {data.img}</p>
      <p>Country: {data.country}</p>
    </div>
  );
}

export default Data;
