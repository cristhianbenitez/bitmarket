import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    changeTheme: (state, action) => (state === 'dark' ? 'light' : 'dark')
  }
});

export const selectTheme = (state) => state.theme;
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
