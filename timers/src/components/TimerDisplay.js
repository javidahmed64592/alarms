import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TimerComponentDisplay from "./TimerComponentDisplay";
import ActionMenu from "./ActionMenu";
import { getTimerRunning, deleteTimer } from "../state/TimerSlice";

export default function TimerDisplay(props) {
  const dispatch = useDispatch();
  const running = useSelector((state) => getTimerRunning(state, props.id));
  const timeText = [props.hoursText, props.minutesText, props.secondsText];
  const timeComponentText = ["HOURS", "MINUTES", "SECONDS"];

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

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin={1}
    >
      <Typography
        component={"span"}
        style={{
          color: props.colour_text,
          fontSize: "36px",
          display: "flex",
        }}
      >
        {props.label}
        <ActionMenu
          colour_primary={props.colour_tertiary}
          colour_text={props.colour_primary}
          buttonColour={props.colour_primary}
          disabled={running}
          items={actionMenuItems}
        />
      </Typography>

      <Stack direction="row" margin={0} spacing={1}>
        {timeText.map((timeValue, index) => {
          return (
            <TimerComponentDisplay
              key={timeComponentText[index]}
              backgroundColor={props.backgroundColor}
              colour_text={props.colour_text}
              timeValue={timeValue}
              timeComponentText={timeComponentText[index]}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
