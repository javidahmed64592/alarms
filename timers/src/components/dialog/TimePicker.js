import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { Box, TextField, Typography } from "@mui/material";
import TimePickerComponent from "./TimePickerComponent";
import { getColours } from "../../state/ColourSlice";
import { setMaxValue } from "../../utils/TimerUtils";
import {
  setLabel,
  setHours,
  setMinutes,
  setSeconds,
  resetDetails,
  getTimerDetails,
} from "../../state/TimerDetailsSlice";

export default function TimePicker() {
  const dispatch = useDispatch();
  dispatch(resetDetails);
  const { label, hours, minutes, seconds } = useSelector((state) =>
    getTimerDetails(state)
  );
  const colours = useSelector((state) => getColours(state));

  const onChangeLabel = (event) => {
    dispatch(setLabel(event.target.value));
  };

  const timeComponentObjects = [
    {
      time: hours,
      text: "HOURS",
      onChange: (event) =>
        dispatch(setHours(setMaxValue(event.target.value, 99))),
      maxValue: 99,
    },
    {
      time: minutes,
      text: "MINUTES",
      onChange: (event) =>
        dispatch(setMinutes(setMaxValue(event.target.value, 59))),
      maxValue: 59,
    },
    {
      time: seconds,
      text: "SECONDS",
      onChange: (event) =>
        dispatch(setSeconds(setMaxValue(event.target.value, 59))),
      maxValue: 59,
    },
  ];

  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          style={{
            color: colours.primary,
            fontSize: "24px",
          }}
        >
          Name:{" "}
        </Typography>
        <Box
          display="inline-block"
          border={2}
          borderColor={colours.primary}
          style={{
            backgroundColor: colours.tertiary,
          }}
        >
          <TextField
            autoFocus
            variant="standard"
            id="label"
            value={label}
            onChange={onChangeLabel}
            fullWidth
            sx={{
              input: {
                color: colours.primary,
                fontSize: "24px",
                margin: 1,
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={1}>
        {timeComponentObjects.map((timeComponentObject) => {
          return (
            <TimePickerComponent
              key={timeComponentObject.text}
              id={timeComponentObject.text}
              value={timeComponentObject.time}
              timeComponentText={timeComponentObject.text}
              onChange={timeComponentObject.onChange}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
