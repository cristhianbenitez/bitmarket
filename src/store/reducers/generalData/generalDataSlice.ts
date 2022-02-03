import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';
interface GeneralState {
  supportedCurrencies: string[];
  globalData: {};
  hasError: boolean;
  isLoading: boolean;
}

const initialState: GeneralState = {
  supportedCurrencies: [],
  globalData: {},
  isLoading: false,
  hasError: false
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
        state.isLoading = true;
      })
      .addCase(getSupportedCurrencies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.globalData = payload.globalData;
        state.supportedCurrencies = payload.supportedCurrencies;
      })
      .addCase(getSupportedCurrencies.rejected, (state, action) => {
        state.isLoading = true;
        state.hasError = true;
      });
  }
});

export default generalDataSlice.reducer;
