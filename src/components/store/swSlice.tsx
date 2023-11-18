import { createSlice } from '@reduxjs/toolkit';
import { StateSlice, Result, ApiResult } from '../../types';

const initialState: StateSlice = {
    inputValue: '',
    page: "1",
    limit: "10",
    isLoadingList: false,
    isLoadingDetails: false,
    apiResults: [],
    results: [],
}

const swSlice = createSlice( {
  name: 'sw',
  initialState,
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload.value;
    },
    setPage(state, action) {
      state.page = action.payload.page;
    },
    setLimit(state, action) {
      state.limit = action.payload.value;
    },
    setLoadingList(state, action) {
      state.isLoadingList = action.payload;
    },
    setLoadingDetails(state, action) {
      state.isLoadingDetails = action.payload;
    },
    setApiResults(state, action) {
      state.apiResults = action.payload;
    },

    setResults(state) {
      const results: Result[] = state.apiResults.map((item: ApiResult) => {
        return {
          name: item.name,
          url: item.url,
          desc: '',
        };
      });
      state.results = results;
    }
  },
});

export const { setInputValue, setPage, setLimit, setLoadingList, setLoadingDetails, setApiResults, setResults } = swSlice.actions;

export default swSlice.reducer;
