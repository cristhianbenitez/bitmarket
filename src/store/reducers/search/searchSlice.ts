import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SearchState {
  status: 'idle' | 'succeeded' | 'failed' | 'loading';
  results: [];
  error?: string;
}

const initialState: SearchState = {
  status: 'idle',
  results: [],
  error: ''
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
        state.status = 'loading';
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default searchSlice.reducer;
