import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: {
      page: "homePage",
      navbarHeader: "Timers",
    },
  },
  reducers: {
    goHomePage: (state) => {
      state.value.page = "homePage";
      state.value.navbarHeader = "Timers";
    },
    setNavbarHeader: (state, action) => {
      state.value.navbarHeader = action.payload;
    },
  },
});

export const { goHomePage, setNavbarHeader } = pageSlice.actions;

export const getPage = (state) => state.page.value.page;
export const getNavbarHeader = (state) => state.page.value.navbarHeader;

export default pageSlice.reducer;
