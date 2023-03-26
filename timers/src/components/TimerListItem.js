import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import TimerDisplay from "./TimerDisplay";
import { parseTimeText } from "../utils/TimerUtils";
import {
  getTimerRunning,
  getTimerRemainingTime,
  countdown,
} from "../state/TimerSlice";

export default function TimerListItem(props) {
  const Ref = useRef(null);
  const dispatch = useDispatch();

  const running = useSelector((state) => getTimerRunning(state, props.label));
  const remainingTime = useSelector((state) =>
    getTimerRemainingTime(state, props.label)
  );

  useEffect(() => {
    if (running && remainingTime > 0) {
      const interval = setInterval(() => {
        dispatch(countdown(props.label));
      }, 1000);
      Ref.current = interval;
    }
    return () => clearInterval(Ref.current);
  }, [running, remainingTime, dispatch, props.label]);

  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: props.colour_secondary,
        border: "1px solid",
        borderColor: props.colour_text,
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        <TimerDisplay
          key={props.label}
          label={props.label}
          hoursText={parseTimeText(remainingTime).hoursText}
          minutesText={parseTimeText(remainingTime).minutesText}
          secondsText={parseTimeText(remainingTime).secondsText}
          colour_primary={props.colour_primary}
          colour_tertiary={props.colour_tertiary}
          colour_text={props.colour_text}
          backgroundColor={props.backgroundColor}
        />
      </Stack>
    </Card>
  );
}
