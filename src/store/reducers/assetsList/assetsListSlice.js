import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';
import { v4 as uuid } from 'uuid';

const initialState = {
  assets: [],
  marketData: {},
  status: 'idle',
  loading: false
};

export const getAssetData = createAsyncThunk(
  'assets/assetData',
  async (asset) => {
    const { coinID, purchasedAmount, date } = asset;
    const purchasedDate = date.split('-').reverse().join('-');
    const { data } = await coinGecko.get(`/coins/${coinID}/history`, {
      params: { date: purchasedDate }
    });
    const uniqueId = uuid().slice(0, 8);
    const historicPriceData = data?.market_data.current_price.usd;
    const { image, name, symbol, id } = data;
    const assetData = {
      uniqueId,
      name,
      symbol,
      id,
      image: image.small,
      purchasedDate,
      purchasedAmount,
      historicPriceData
    };
    return assetData;
  }
);

const assetsListSlice = createSlice({
  name: 'assets',
  initialState: {
    assets: [],
    marketData: {},
    status: 'idle',
    loading: false
  },
  reducers: {
    handleRemove: (state, { payload }) => {
      const filteredAssets = Object.assign(state.assets).filter(
        (asset) => asset.uniqueId !== payload
      );
      state.assets = filteredAssets;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAssetData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAssetData.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.assets = [...state.assets, payload];
      })
      .addCase(getAssetData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { handleRemove } = assetsListSlice.actions;
export default assetsListSlice.reducer;
