import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';

interface SummaryState {
  summaryData: any;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: SummaryState = {
  summaryData: [],
  isLoading: true,
  hasError: false
};

export const getSummaryData = createAsyncThunk(
  'summaryData/getSummaryData',
  async (id: string) => {
    const { data } = await coinGecko.get(`/coins/${id}`, {
      params: {
        market_data: 'true',
        localization: 'false',
        tickers: 'false',
        interval: 'daily',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false'
      }
    });
    return data;
  }
);

export const summaryDataSlice = createSlice({
  name: 'summaryData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSummaryData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSummaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.summaryData = action.payload;
      })
      .addCase(getSummaryData.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = true;
      });
  }
});

export default summaryDataSlice.reducer;
