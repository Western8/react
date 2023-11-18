import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = `https://swapi.dev/api/people/`;

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getResults: builder.query({
      query: (arg) => {
        let { page, inputValue } = arg;
        const urlParams: String[] = [];
        if (inputValue !== '') {
          urlParams.push(`search=${inputValue}`);
          page = "1";
        }
        urlParams.push(`page=${page}`);
        const urlParamsStr = `?${urlParams.join('&')}`;
        return urlParamsStr;
      },
    }),
    getDetails: builder.query({
      query: (arg) => {
        let { idPerson } = arg;
        const urlParamsStr = `${idPerson}`;
        return urlParamsStr;
      },
    }),
  }),
});

export const { useGetResultsQuery, useGetDetailsQuery } = swApi;