//import './FormUnctrl.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDataList } from "../store/slice";
import { IDataItem } from "../../types";

function FormUnctrl() {
  const dispatch = useAppDispatch();
  const refName = React.useRef<HTMLInputElement>(null);
  const refAge = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function handleSubmit() {
    const dataItem: IDataItem = {
      name: '',
      age: 0,
    };
    if (refName.current) {
      dataItem.name = refName.current.value;
    }
    if (refAge.current) {
      dataItem.age = +refAge.current.value;
    }
    dispatch(setDataList({ dataItem }));
    // setDataList({ dataItem });
    navigate('/', { replace: true });
  }

  return (
    <div className="form">
      <h1>Uncontrolled form</h1>
      <form>
        <label>Name</label>
        <input type="text" ref={refName}/>
        <label>Age</label>
        <input type="number" ref={refAge}/>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormUnctrl;
