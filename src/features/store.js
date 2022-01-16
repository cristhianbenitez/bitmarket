import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './currency/currencySlice';
import coinsListSlice from './coinsList/coinsListSlice';
import chartsDataSlice from './chartsData/chartsDataSlice';
import generalDataSlice from './generalData/generalDataSlice';
import themeSlicer from './theme/themeSlicer';

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    theme: themeSlicer,
    coinsList: coinsListSlice,
    chartsData: chartsDataSlice,
    generalData: generalDataSlice
  }
});
