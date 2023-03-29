import { createSlice } from "@reduxjs/toolkit";
import { sortListByTime } from "../utils/TimerUtils";

export const timerSlice = createSlice({
  name: "timers",
  initialState: {
    value: [
      {
        id: "id1",
        label: "Timer 1",
        setTime: 5,
        remainingTime: 5,
        running: false,
      },
      {
        id: "id2",
        label: "Timer 2",
        setTime: 7200,
        remainingTime: 7200,
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
      state.value = state.value.filter((timer) => timer.id !== action.payload);
    },
    startTimer: (state, action) => {
      state.value = state.value.map((timer) => {
        const running = timer.id === action.payload ? true : timer.running;
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
        const running = timer.id === action.payload ? false : timer.running;
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
    countdown: (state, action) => {
      state.value = state.value.map((timer) => {
        const remainingTime =
          timer.id === action.payload
            ? timer.remainingTime - 1
            : timer.remainingTime;
        timer.remainingTime = remainingTime;
        if (remainingTime === 0) timer.running = false;
        return timer;
      });
    },
    resetTimers: (state) => {
      state.value = state.value = state.value.map((timer) => {
        timer.remainingTime = timer.setTime;
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
  countdown,
  resetTimers,
} = timerSlice.actions;

export const selectList = (state) => state.timers.value;

export const getTimerRunning = (state, id) => {
  const timer = state.timers.value.find((timer) => timer.id === id);
  return timer.running;
};

export const getTimerSetTime = (state, id) => {
  const timer = state.timers.value.find((timer) => timer.id === id);
  return timer.setTime;
};

export const getTimerRemainingTime = (state, id) => {
  const timer = state.timers.value.find((timer) => timer.id === id);
  return timer.remainingTime;
};

export default timerSlice.reducer;
