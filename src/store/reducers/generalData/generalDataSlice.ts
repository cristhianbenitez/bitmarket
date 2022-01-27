import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';
interface GeneralState {
  supportedCurrencies: string[];
  globalData: {};
  status: 'idle' | 'succeeded' | 'failed' | 'loading';
  error?: string;
  loading: boolean;
}

<<<<<<< HEAD:src/store/reducers/generalData/generalDataSlice.ts
=======
interface GeneralState {
  supportedCurrencies: [];
  globalData: {};
  status: string;
  loading: boolean;
}

>>>>>>> ce4bb9b221d51f993cf8455ce660d335b07a1423:src/store/reducers/generalData/generalDataSlice.js
const initialState: GeneralState = {
  supportedCurrencies: [],
  globalData: {},
  status: 'idle',
  loading: false,
  error: ''
};

export const getSupportedCurrencies = createAsyncThunk(
  'supportedCurrencies/getSupportedCurrencies',
  async () => {
    const [result1, result2] = await Promise.all([
      await coinGecko.get('/simple/supported_vs_currencies'),
      await coinGecko.get('/global')
    ]);
    const supportedCurrencies = result1.data;
    const globalData = result2.data.data;
    return { supportedCurrencies, globalData };
  }
);

export const generalDataSlice = createSlice({
  name: 'generalData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSupportedCurrencies.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSupportedCurrencies.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.globalData = payload.globalData;
        state.supportedCurrencies = payload.supportedCurrencies;
      })
      .addCase(getSupportedCurrencies.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export default generalDataSlice.reducer;
