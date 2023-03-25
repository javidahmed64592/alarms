import { createSlice } from "@reduxjs/toolkit";

const getTimerLength = (timer) => {
  return timer.seconds + timer.minutes * 60 + timer.hours * 3600;
};

const sortListByTime = (listToSort) => {
  const newList = listToSort.sort(
    (timerA, timerB) => getTimerLength(timerA) - getTimerLength(timerB)
  );
  return newList;
};

export const timerSlice = createSlice({
  name: "timers",
  initialState: {
    value: [
      {
        label: "Timer 1",
        hours: 1,
        minutes: 0,
        seconds: 0,
      },
      {
        label: "Timer 2",
        hours: 2,
        minutes: 0,
        seconds: 0,
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
