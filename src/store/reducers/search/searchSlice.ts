import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SearchState {
  isLoading: boolean;
  results: [];
  hasError: boolean;
}

const initialState: SearchState = {
  results: [],
  isLoading: false,
  hasError: false
};

export const getSearchResults = createAsyncThunk(
  'search/coinsSearch',
  async (query: string) => {
    const parsedQuery = await query.replaceAll(' ', '+');
    if (query && query.length > 0) {
      const { data } = await axios.get(
        `https://crypto-app-server.herokuapp.com/coins/${parsedQuery}`
      );
      return data;
    }
    return [];
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isLoading = true;
        state.hasError = true;
      });
  }
});

export default searchSlice.reducer;
