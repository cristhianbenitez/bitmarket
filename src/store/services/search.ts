import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/'
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (query) => {
        if (query.length > 0) {
          const parsedQuery = query.replaceAll(' ', '+');
          return `search?query=${parsedQuery}`;
        }
        return '';
      }
    })
  })
});

export const { useGetSearchResultsQuery } = searchApi;
