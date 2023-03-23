import React, { useState, useRef } from "react";
import { getTimeRemaining, parseTimeText } from "../utils/TimerUtils";

export default function TimerObject(props) {
  const Ref = useRef(null);

  const getTotalTime = () => {
    return props.seconds + props.minutes * 60 + props.hours * 3600;
  };

  const [remainingTime, setRemainingTime] = useState(getTotalTime());

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
  };

  const clearTimer = (e) => {
    stopTimer();
    const id = setInterval(() => {
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
    <div className="App">
      <h2>
        {parseTimeText(remainingTime).hoursText}:
        {parseTimeText(remainingTime).minutesText}:
        {parseTimeText(remainingTime).secondsText}
      </h2>
      <button onClick={onClickStart}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}
