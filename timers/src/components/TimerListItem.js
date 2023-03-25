import React, { useState, useRef } from "react";
import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { getTimeRemaining, parseTimeText } from "../utils/TimerUtils";
import TimerDisplay from "./TimerDisplay";
import StyledIconButton from "./StyledIconButton";

export default function TimerListItem(props) {
  const Ref = useRef(null);

  const getTotalTime = () => {
    return props.seconds + props.minutes * 60 + props.hours * 3600;
  };

  const [remainingTime, setRemainingTime] = useState(getTotalTime());
  const [running, setRunning] = useState(false);

  const resetTime = () => {
    setRemainingTime(getTotalTime);
  };

  const startTimer = (e) => {
    let { total } = getTimeRemaining(e);
    if (total >= 0) {
      setRemainingTime(total);
      if (total === 0) {
        stopTimer();
      }
    }
  };

  const stopTimer = () => {
    if (Ref.current) clearInterval(Ref.current);
    setRunning(false);
  };

  const clearTimer = (e) => {
    stopTimer();
    const id = setInterval(() => {
      setRunning(true);
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + remainingTime);
    return deadline;
  };

  const onClickReset = () => {
    stopTimer();
    resetTime();
  };

  const onClickStart = () => {
    clearTimer(getDeadTime());
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
          running={running}
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
            onClick={stopTimer}
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
