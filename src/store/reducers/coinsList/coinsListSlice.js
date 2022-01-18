import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';

const initialState = {
  listOfCoins: [],
  status: 'idle',
  loading: false,
  pageNumber: 1,
  hasMore: false
};

export const getListOfCoins = createAsyncThunk(
  'coinsList/getListOfCoins',
  async ({ currency, pageNumber }) => {
    const { data } = await coinGecko.get('/coins/markets', {
      params: {
        vs_currency: currency,
        days: '1',
        order: 'market_cap_desc',
        per_page: '15',
        page: pageNumber,
        interval: 'hourly',
        sparkline: true,
        price_change_percentage: '1h,24h,7d'
      }
    });
    return data;
  }
);

const coinsListSlice = createSlice({
  name: 'coinsList',
  initialState,
  reducers: {
    incrementPage: (state, payload) => {
      state.pageNumber += 1;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getListOfCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getListOfCoins.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.listOfCoins = [...state.listOfCoins, ...payload];
        state.hasMore = payload.length > 0;
      })
      .addCase(getListOfCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { incrementPage } = coinsListSlice.actions;
export default coinsListSlice.reducer;
