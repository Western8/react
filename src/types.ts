export interface IDataItem {
  name: string;
  age: number;
  email: string;
  password1: string;
  password2: string;
  gender: Gender;
  accept: boolean;
  img: string;
  country: Country;
}

export interface IDataProps {
  data: IDataItem;
  last: boolean;
}
export interface IData {
  title: string;
  dataList: IDataItem[];
}

export enum Gender {
  male = 'male',
  female = 'female',
}

export enum Country {
  Belarus = 'Belarus',
  France = 'France',
  Italy = 'Italy',
  Poland = 'Poland',
  Sweden = 'Sweden',
  UK = 'UK',
  USA = 'USA',
}

export interface IErrors {
  name: { message: string };
  age: { message: string };
  email: { message: string };
  password1: { message: string };
  password2: { message: string };
  gender: { message: string };
  accept: { message: string };
  img: { message: string };
  country: { message: string };
}
