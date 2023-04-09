import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Stack, Typography } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Display from "./Display";
import ActionMenu from "../menu/ActionMenu";
import { parseTimeText } from "../../utils/TimerUtils";
import {
  getTimerRunning,
  getTimerRemainingTime,
  countdown,
  deleteTimer,
} from "../../state/TimerSlice";
import { getColours } from "../../state/ColourSlice";

export default function Timer(props) {
  const Ref = useRef(null);
  const dispatch = useDispatch();
  const colours = useSelector((state) => getColours(state));

  const running = useSelector((state) => getTimerRunning(state, props.id));
  const remainingTime = useSelector((state) =>
    getTimerRemainingTime(state, props.id)
  );

  const actionMenuItems = [
    {
      icon: <EditIcon />,
      label: "Edit",
      onClick: () => alert("Clicked edit!"),
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      onClick: () => dispatch(deleteTimer(props.id)),
    },
  ];

  useEffect(() => {
    if (running && remainingTime > 0) {
      const interval = setInterval(() => {
        dispatch(countdown(props.id));
      }, 1000);
      Ref.current = interval;
    }
    return () => clearInterval(Ref.current);
  }, [running, remainingTime, dispatch, props.id]);

  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: colours.secondary,
        border: "2px solid",
        borderColor: colours.primary,
        margin: 2,
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin={1}
      >
        <Typography
          component={"span"}
          style={{
            color: colours.primary,
            fontSize: "36px",
          }}
        >
          {props.label}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <TimerIcon fontSize="large" sx={{ color: colours.primary }} />
          <Display
            key={props.id}
            id={props.id}
            label={props.label}
            hoursText={parseTimeText(remainingTime).hoursText}
            minutesText={parseTimeText(remainingTime).minutesText}
            secondsText={parseTimeText(remainingTime).secondsText}
          />
          <ActionMenu
            iconColour={colours.primary}
            disabled={running}
            items={actionMenuItems}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
