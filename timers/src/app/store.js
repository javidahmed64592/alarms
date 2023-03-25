import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../state/TimerSlice";

export default configureStore({
  reducer: {
    timers: timerReducer,
  },
});
