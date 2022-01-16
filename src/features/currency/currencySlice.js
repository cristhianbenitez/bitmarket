import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: 'usd',
  reducers: {
    updateCurrency: (state, action) => action.payload
  }
});

export const selectCurrency = (state) => state.currency;
export const { updateCurrency } = currencySlice.actions;
export default currencySlice.reducer;
