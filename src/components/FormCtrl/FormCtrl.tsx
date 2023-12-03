//import './FormCtrl.css';
import React from "react";
import { useForm } from "react-hook-form";
import { IDataItem } from "../../types";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDataList } from "../store/slice";

const FormCtrl: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IDataItem>();

  const onSubmit = (data: IDataItem) => {
    const dataItem: IDataItem = {
      name: data.name,
      age: data.age,
    };
    dispatch(setDataList({ dataItem }));
    navigate('/', { replace: true });
  };

  return (
    <div className="form">
      <h1>Controlled form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-name">
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="input-age">
          <label>Age</label>
          <input type="number" {...register("age")} />
        </div>
        <input type="submit" />
        {/* <button type="button" onClick={handleSubmit}>Submit</button> */}
      </form>
    </div>
  );
}

export default FormCtrl;
