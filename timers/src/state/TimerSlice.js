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
    startTimer: (state, action) => {
      state.value = state.value.map((timer) => {
        const running = timer.label === action.payload ? true : timer.running;
        timer.running = running;
        return timer;
      });
    },
    startTimers: (state) => {
      state.value = state.value = state.value.map((timer) => {
        timer.running = true;
        return timer;
      });
    },
    stopTimer: (state, action) => {
      state.value = state.value.map((timer) => {
        const running = timer.label === action.payload ? false : timer.running;
        timer.running = running;
        return timer;
      });
    },
    stopTimers: (state) => {
      state.value = state.value = state.value.map((timer) => {
        timer.running = false;
        return timer;
      });
    },
  },
});

export const {
  setList,
  addTimer,
  deleteTimer,
  startTimer,
  startTimers,
  stopTimer,
  stopTimers,
} = timerSlice.actions;

export const selectList = (state) => state.timers.value;

export const getTimerRunning = (state, label) => {
  const timer = state.timers.value.find((timer) => timer.label === label);

  return timer.running;
};

export default timerSlice.reducer;
