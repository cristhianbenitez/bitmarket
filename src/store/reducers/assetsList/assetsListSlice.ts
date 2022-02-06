import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import coinGecko from 'api/coinGecko';
import { v4 as uuid } from 'uuid';

interface AssetProps {
  coinId: string;
  purchasedAmount: number;
  date: string;
}

interface AssetState {
  assets: any[];
  marketData: object;
  hasError: boolean;
  isLoading: boolean;
}

const initialState: AssetState = {
  assets: [],
  marketData: {},
  isLoading: false,
  hasError: false
};

export const getAssetData = createAsyncThunk(
  'assets/assetData',
  async (asset: AssetProps) => {
    const { coinId, purchasedAmount, date } = asset;
    const purchasedDate = date.split('-').reverse().join('-');
    const { data } = await coinGecko.get(`/coins/${coinId}/history`, {
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
export interface Assets {
  id: string;
  name: string;
  symbol: string;
  image: string;
  purchasedAmount: number;
  purchasedDate: string;
  uniqueId: string;
}
const assetsListSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    handleRemove: (state, { payload }) => {
      const filteredAssets = Object.assign(state.assets).filter(
        (asset: Assets) => asset.uniqueId !== payload
      );
      state.assets = filteredAssets;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAssetData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssetData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.assets = [...state.assets, payload];
      })
      .addCase(getAssetData.rejected, (state, action) => {
        state.isLoading = true;
        state.hasError = true;
      });
  }
});

export const { handleRemove } = assetsListSlice.actions;
export default assetsListSlice.reducer;
