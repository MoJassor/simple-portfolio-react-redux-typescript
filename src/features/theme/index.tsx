import { RootState } from "../../app/store";

import { createSlice } from "@reduxjs/toolkit";
export interface ThemeValue {
  color: string;
  backgroundColor: string;
}
const themeValues = {
  dark: {
    color: "#f5f5f5",
    backgroundColor: "rgb(41, 44, 44)",
  },
  light: {
    color: "rgb(41, 44, 44)",
    backgroundColor: "#f5f5f5",
  },
};
export interface Theme {
  value: ThemeValue;
  activeTheme: "dark" | "light";
}
const themeSlice = createSlice({
  initialState: { value: themeValues.light, activeTheme: "light" },
  name: "theme",
  reducers: {
    flip(state) {
      if (state.activeTheme === "light") {
        state.activeTheme = "dark";
        state.value = themeValues.dark;
      } else {
        state.activeTheme = "light";
        state.value = themeValues.light;
      }
    },
  },
});
export const { flip } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export const selectActiveTheme = (state: RootState) => state.theme.activeTheme;
export default themeSlice.reducer;
