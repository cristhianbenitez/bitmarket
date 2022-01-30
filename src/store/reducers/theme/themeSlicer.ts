import { createSlice } from '@reduxjs/toolkit';

const initialState: string = 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, _) => (state === 'dark' ? 'light' : 'dark')
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
