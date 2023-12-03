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
  Male = 'male',
  Female = 'female',
}

export enum Country {
  Belarus,
  France,
  Italy,
  Poland,
  Sweden,
  UK,
  USA,
}