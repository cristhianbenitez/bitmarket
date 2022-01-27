import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState: string = 'usd';

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateCurrency: (state, action) => action.payload
  }
});
export const selectCurrency = (state: RootState) => state.currency;
export const { updateCurrency } = currencySlice.actions;
export default currencySlice.reducer;
