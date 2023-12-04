export interface IDataItem {
  name: string,
  age: number,
  email: string,
  password1: string,
  password2: string,
  gender: Gender,
  accept: boolean,
  img: string,
  country: Country,
}

export interface IDataProps {
  data: IDataItem,
  last: boolean,
}
export interface IData {
  title: string,
  dataList: IDataItem[],
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