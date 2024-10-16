import { createSlice } from '@reduxjs/toolkit';
import Theme from '../types/theme';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ThemeState = {
  selectedTheme: Theme,
};

const initialState: ThemeState = {
  selectedTheme: Theme.Dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
