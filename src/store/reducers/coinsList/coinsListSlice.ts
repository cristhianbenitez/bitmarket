import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';

interface ListOfCoinsState {
  listOfCoins: any[];
  isLoading: boolean;
  pageNumber: number;
  hasError: boolean;
  hasMore: boolean;
}

const initialState: ListOfCoinsState = {
  listOfCoins: [],
  isLoading: false,
  pageNumber: 1,
  hasMore: false,
  hasError: false
};

interface CoinsList {
  currency: string;
  pageNumber: number;
}

export const getListOfCoins = createAsyncThunk(
  'coinsList/getListOfCoins',
  async ({ currency, pageNumber }: CoinsList) => {
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
    incrementPage: (state) => {
      state.pageNumber += 1;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getListOfCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListOfCoins.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.listOfCoins = [...state.listOfCoins, ...payload];
        state.hasMore = payload.length > 0;
      })
      .addCase(getListOfCoins.rejected, (state, action) => {
        state.isLoading = true;
        state.hasError = true;
      });
  }
});

export const { incrementPage } = coinsListSlice.actions;
export default coinsListSlice.reducer;
