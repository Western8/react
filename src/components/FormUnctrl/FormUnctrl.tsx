import './FormUnctrl.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setDataList } from '../store/slice';
import { IDataItem, Gender, IErrors, countries } from '../../types';
import schema from '../../yup';
import * as yup from 'yup';

function FormUnctrl() {
  const dispatch = useAppDispatch();
  const initErrors: IErrors = {
    name: { message: '' },
    age: { message: '' },
    email: { message: '' },
    password1: { message: '' },
    password2: { message: '' },
    gender: { message: '' },
    accept: { message: '' },
    img: { message: '' },
    country: { message: '' },
  };
  const [errors, setErrors] = useState(initErrors);
  const [gender, setGender] = useState('male');
  const [img64, setImg64] = useState('');
  const [update, setUpdate] = useState(true);
  const refName = React.useRef<HTMLInputElement>(null);
  const refAge = React.useRef<HTMLInputElement>(null);
  const refEmail = React.useRef<HTMLInputElement>(null);
  const refPassword1 = React.useRef<HTMLInputElement>(null);
  const refPassword2 = React.useRef<HTMLInputElement>(null);
  const refAccept = React.useRef<HTMLInputElement>(null);
  const refImg = React.useRef<HTMLInputElement>(null);
  const refCountry = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function changeGender(e: React.ChangeEvent<HTMLInputElement>) {
    setGender(e.currentTarget.value);
  }

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

  async function handleSubmit() {
    const dataItem: IDataItem = {
      name: '',
      age: 0,
      email: '',
      password1: '',
      password2: '',
      gender: Gender.male,
      accept: false,
      img: '',
      country: '',
    };
    if (refName.current) {
      dataItem.name = refName.current.value;
    }
    if (refAge.current) {
      dataItem.age = +refAge.current.value;
    }
    if (refEmail.current) {
      dataItem.email = refEmail.current.value;
    }
    if (refPassword1.current) {
      dataItem.password1 = refPassword1.current.value;
    }
    if (refPassword2.current) {
      dataItem.password2 = refPassword2.current.value;
    }
    if (refAccept.current) {
      dataItem.accept = Boolean(refAccept.current.value);
    }
    if (refCountry.current) {
      dataItem.country = refCountry.current.value;
    }
    dataItem.gender = Gender[gender as keyof typeof Gender];
    dataItem.img = img64;

    try {
      await schema.validate(dataItem, { abortEarly: false });
    } catch (err) {
      const errorsYup: IErrors = initErrors;
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((item) => {
          errorsYup[item.path as keyof typeof errorsYup] = { message: item.message };
        });
        setErrors(errorsYup);
        setUpdate(!update);
      }
      return;
    }
    dispatch(setDataList({ dataItem }));
    navigate('/', { replace: true });
  }

  let countrylist: JSX.Element[] = [<></>];
  countrylist = countries.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className="form">
      <h1>Uncontrolled form</h1>
      <form>
        <div className="input-name">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={refName} />
          <p>{errors.name && errors.name?.message}</p>
        </div>
        <div className="input-age">
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={refAge} />
          <p>{errors.age && errors.age?.message}</p>
        </div>
        <div className="input-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" ref={refEmail} />
          <p>{errors.email && errors.email?.message}</p>
        </div>
        <div className="input-password1">
          <label htmlFor="password1">Password</label>
          <input id="password1" type="password" ref={refPassword1} />
          <p>{errors.password1 && errors.password1?.message}</p>
        </div>
        <div className="input-password2">
          <label htmlFor="password2">Repeat password</label>
          <input id="password2" type="password" ref={refPassword2} />
          <p>{errors.password2 && errors.password2?.message}</p>
        </div>
        <div className="input-gender">
          Gender
          <label htmlFor="gender-male">male</label>
          <input
            id="gender-male"
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => changeGender(e)}
          />
          <label htmlFor="gender-female">female</label>
          <input
            id="gender-female"
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => changeGender(e)}
          />
          <p>{errors.gender && errors.gender?.message}</p>
        </div>
        <div className="input-accept">
          <label htmlFor="accept">Accept T&C</label>
          <input id="accept" type="checkbox" ref={refAccept} />
          <p>{errors.accept && errors.accept?.message}</p>
        </div>
        <div className="input-img">
          <label htmlFor="img">Image</label>
          <input id="img" type="file" ref={refImg} onChange={(e) => changeImg(e)} />
          <p>{errors.img && errors.img?.message}</p>
        </div>
        <div className="input-country">
          <label htmlFor="country">Country</label>
          <input id="country" type="text" list="countrylist" ref={refCountry} />
          <datalist id="countrylist">{countrylist}</datalist>
          <p>{errors.country && errors.country?.message}</p>
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormUnctrl;
