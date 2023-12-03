export interface IDataItem {
  name: string,
  age: number,
}

export interface IDataProps {
  data: IDataItem,
}
export interface IData {
  title: string,
  dataList: IDataItem[],
}
