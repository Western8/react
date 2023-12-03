//import './FormUnctrl.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDataList } from "../store/slice";
import { IDataItem } from "../../types";
import schema from "../../yup";

function FormUnctrl() {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({ name: { message: null }, age: { message: null }});
  const refName = React.useRef<HTMLInputElement>(null);
  const refAge = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function handleSubmit() {
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

    const errorsYup = schema.validateSync(dataItem);
    setErrors(errorsYup);
    if (errorsYup) {
      return;
    }
    dispatch(setDataList({ dataItem }));
    navigate('/', { replace: true });
  }

  return (
    <div className="form">
      <h1>Uncontrolled form</h1>
      <form>
        <div className="input-name">
          <label>Name</label>
          <input type="text" ref={refName} />
          <p>{errors.name && errors.name?.message}</p>
        </div>
        <div className="input-age">
          <label>Age</label>
          <input type="number" ref={refAge} />
          <p>{errors.age && errors.age?.message}</p>
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormUnctrl;
