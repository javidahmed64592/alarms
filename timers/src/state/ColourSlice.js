import { createSlice } from "@reduxjs/toolkit";
let colours = require("../public/AppColours.json");

export const colourSlice = createSlice({
  name: "colours",
  initialState: {
    value: {
      primary: colours.red,
      secondary: colours.black,
      tertiary: colours.grey,
      quaternary: colours.white,
    },
  },
  reducers: {
    setPrimary: (state, action) => {
      state.value.primary = action.payload;
    },
    setSecondary: (state, action) => {
      state.value.secondary = action.payload;
    },
    setTertiary: (state, action) => {
      state.value.tertiary = action.payload;
    },
    setQuaternary: (state, action) => {
      state.value.quaternary = action.payload;
    },
  },
});

export const { setPrimary, setSecondary, setTertiary, setQuaternary } =
  colourSlice.actions;

export const getColours = (state) => state.colours.value;

export default colourSlice.reducer;
