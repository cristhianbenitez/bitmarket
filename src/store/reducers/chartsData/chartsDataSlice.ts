import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';

interface ChartsState {
  volumes24h: {
    x: number;
    y: number;
  }[];
  prices30d: {
    x: number;
    y: number;
  }[];
  status: 'idle' | 'succeeded' | 'failed' | 'loading';
  error?: string;
  loading: boolean;
}

const initialState: ChartsState = {
  volumes24h: [],
  prices30d: [],
  status: 'idle',
  loading: false,
  error: ''
};

export const getChartsData = createAsyncThunk(
  'chartsData/getChartsData',
  async (props: { currency: string }) => {
    const [volume24h, coinPrice] = await Promise.all([
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: props.currency, days: '30', interval: 'daily' }
      }),
      coinGecko.get('/coins/bitcoin/market_chart', {
        params: { vs_currency: props.currency, days: '1', interval: 'hourly' }
      })
    ]);

    const formatData = (data: []) =>
      data.map(([x, y]: number[]) => ({ x: x, y: Number(y?.toFixed(2)) }));

    const prices30d = formatData(coinPrice.data.prices);
    const volumes24h = formatData(volume24h.data.total_volumes);
    return { prices30d, volumes24h };
  }
);

export const chartsDataSlice = createSlice({
  name: 'chartsData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getChartsData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getChartsData.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.prices30d = payload.prices30d;
        state.volumes24h = payload.volumes24h;
      })
      .addCase(getChartsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default chartsDataSlice.reducer;
