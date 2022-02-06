import { combineReducers } from '@reduxjs/toolkit';
import currencySlice from './currency/currencySlice';
import coinsListSlice from './coinsList/coinsListSlice';
import chartsDataSlice from './chartsData/chartsDataSlice';
import generalDataSlice from './generalData/generalDataSlice';
import themeSlicer from './theme/themeSlicer';
import assetsListSlice from './assetsList/assetsListSlice';
import summaryDataSlice from './summary/summaryDataSlice';
import { searchApi } from '../services/search';

export const rootReducer = combineReducers({
  currency: currencySlice,
  theme: themeSlicer,
  coinsList: coinsListSlice,
  chartsData: chartsDataSlice,
  generalData: generalDataSlice,
  assetsList: assetsListSlice,
  summaryData: summaryDataSlice,
  [searchApi.reducerPath]: searchApi.reducer
});
