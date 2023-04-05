import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../state/TimerSlice";
import colourReducer from "../state/ColourSlice";
import timerDetailsReducer from "../state/TimerDetailsSlice";

export default configureStore({
  reducer: {
    timers: timerReducer,
    colours: colourReducer,
    timerDetails: timerDetailsReducer,
  },
});
