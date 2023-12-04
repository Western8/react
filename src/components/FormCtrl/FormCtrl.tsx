import './FormCtrl.css';
//import React, { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IDataItem } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setDataList } from '../store/slice';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../yup';

const FormCtrl: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const [img64, setImg64] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataItem>({ resolver: yupResolver(schema) });

  /*
  function changeImg(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        if (reader.result) {
          setImg64(reader.result.toString());
        }
      };
    }
  }
  */

  const onSubmit = (data: IDataItem) => {
    const dataItem: IDataItem = {
      name: data.name,
      age: data.age,
      email: data.email,
      password1: data.password1,
      password2: data.password2,
      gender: data.gender,
      accept: data.accept,
      img: data.img[0],
      country: data.country,
    };
    dispatch(setDataList({ dataItem }));
    navigate('/', { replace: true });
  };

  return (
    <div className="form">
      <h1>Controlled form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-name">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="input-age">
          <label htmlFor="age">Age</label>
          <input id="age" type="number" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>
        <div className="input-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="input-password1">
          <label htmlFor="password1">Password</label>
          <input id="password1" type="password" {...register('password1')} />
          <p>{errors.password1?.message}</p>
        </div>
        <div className="input-password2">
          <label htmlFor="password2">Repeat password</label>
          <input id="password2" type="password" {...register('password2')} />
          <p>{errors.password2?.message}</p>
        </div>
        <div className="input-gender">
          Gender
          <label htmlFor="gender">male</label>
          <input id="gender" type="radio" value="male" checked={true} {...register('gender')} />
          <label htmlFor="gender">female</label>
          <input id="gender" type="radio" value="female" {...register('gender')} />
          <p>{errors.gender?.message}</p>
        </div>
        <div className="input-accept">
          <label htmlFor="accept">Accept T&C</label>
          <input id="accept" type="checkbox" {...register('accept')} />
          <p>{errors.accept?.message}</p>
        </div>
        <div className="input-img">
          <label htmlFor="img">Image</label>
          {/* <input id="img" type="file" onChange={(e) => changeImg(e)} /> */}
          <input id="img" type="file" {...register('img')} />
          <p>{errors.img?.message}</p>
        </div>
        <div className="input-country">
          <label htmlFor="country">Country</label>
          <input id="country" type="string" {...register('country')} />
          <p>{errors.country?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormCtrl;
