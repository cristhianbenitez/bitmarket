import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';

interface SummaryState {
  summaryData: any[];
  status: 'idle' | 'succeeded' | 'failed' | 'loading';
  error?: string;
  loading: boolean;
}

const initialState: SummaryState = {
  summaryData: [],
  status: 'idle',
  loading: false,
  error: ''
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
        state.status = 'loading';
      })
      .addCase(getSummaryData.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.summaryData = payload;
      })
      .addCase(getSummaryData.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export default summaryDataSlice.reducer;
