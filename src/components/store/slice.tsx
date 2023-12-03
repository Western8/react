import { createSlice } from '@reduxjs/toolkit';
import { IData, IDataItem } from '../../types';

const initialState: IData = {
  title: 'Unknown',
  dataList: [],
};

const slice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setDataList(state, action) {
      const dataItem: IDataItem = {
        name: action.payload.dataItem.name,
        age: action.payload.dataItem.age,
      }
      state.dataList.push(dataItem);
    },
  },
});

export const {
  setDataList,
} = slice.actions;

export default slice.reducer;
