import { createSlice } from "@reduxjs/toolkit";
import { sortListByTime } from "../utils/TimerUtils";

export const timerSlice = createSlice({
  name: "timers",
  initialState: {
    value: [
      {
        label: "Timer 1",
        hours: 0,
        minutes: 0,
        seconds: 5,
        running: false,
      },
      {
        label: "Timer 2",
        hours: 2,
        minutes: 0,
        seconds: 0,
        running: false,
      },
    ],
  },
  reducers: {
    setList: (state, action) => {
      state.value = action.payload;
    },
    addTimer: (state, action) => {
      state.value = sortListByTime([...state.value, action.payload]);
    },
    deleteTimer: (state, action) => {
      state.value = state.value.filter(
        (timer) => timer.label !== action.payload
      );
    },
  },
});

export const { setList, addTimer, deleteTimer } = timerSlice.actions;

export const selectList = (state) => state.timers.value;

export default timerSlice.reducer;
