import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../state/TimerSlice";
import colourReducer from "../state/ColourSlice";

export default configureStore({
  reducer: {
    timers: timerReducer,
    colours: colourReducer,
  },
});
