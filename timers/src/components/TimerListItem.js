import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TimerDisplay from "./TimerDisplay";
import StyledIconButton from "./StyledIconButton";
import { HMSToTotal, parseTimeText } from "../utils/TimerUtils";
import { startTimer, stopTimer } from "../state/TimerSlice";

export default function TimerListItem(props) {
  const Ref = useRef(null);
  const dispatch = useDispatch();

  const [remainingTime, setRemainingTime] = useState(
    HMSToTotal(props.hours, props.minutes, props.seconds)
  );
  const running = useSelector(
    (state) =>
      state.timers.value.find((timer) => timer.label === props.label).running
  );

  useEffect(() => {
    if (running && remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
      Ref.current = interval;
    }
    return () => clearInterval(Ref.current);
  }, [running, remainingTime]);

  const resetTime = () => {
    setRemainingTime(HMSToTotal(props.hours, props.minutes, props.seconds));
  };

  const onClickReset = () => {
    dispatch(stopTimer(props.label));
    resetTime();
  };

  const onClickStop = () => {
    dispatch(stopTimer(props.label));
  };

  const onClickStart = () => {
    dispatch(startTimer(props.label));
  };

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
        <Stack direction="row" spacing={3}>
          <StyledIconButton
            variant="contained"
            icon={<PlayArrowIcon fontSize="inherit" />}
            onClick={onClickStart}
            size={"large"}
            iconColor={props.colour_text}
            borderColour={props.colour_tertiary}
          />
          <StyledIconButton
            variant="contained"
            icon={<PauseIcon fontSize="inherit" />}
            onClick={onClickStop}
            size={"large"}
            iconColor={props.colour_text}
            borderColour={props.colour_tertiary}
          />
          <StyledIconButton
            variant="contained"
            icon={<RestartAltIcon fontSize="inherit" />}
            onClick={onClickReset}
            size={"large"}
            iconColor={props.colour_text}
            borderColour={props.colour_tertiary}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
