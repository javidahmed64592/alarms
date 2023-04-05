import { createSlice } from "@reduxjs/toolkit";

export const timerDetailsSlice = createSlice({
  name: "timerDetails",
  initialState: {
    value: {
      label: "New timer",
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  },
  reducers: {
    setLabel: (state, action) => {
      state.value.label = action.payload;
    },
    setHours: (state, action) => {
      state.value.hours = action.payload;
    },
    setMinutes: (state, action) => {
      state.value.minutes = action.payload;
    },
    setSeconds: (state, action) => {
      state.value.seconds = action.payload;
    },
    resetDetails: (state) => {
      state.value.label = "New timer";
      state.value.hours = 0;
      state.value.minutes = 0;
      state.value.seconds = 0;
    },
    setDetails: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const {
  setLabel,
  setHours,
  setMinutes,
  setSeconds,
  resetDetails,
  setDetails,
} = timerDetailsSlice.actions;

export const getTimerDetails = (state) => state.timerDetails.value;

export default timerDetailsSlice.reducer;
