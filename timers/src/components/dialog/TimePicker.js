import { useState } from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { Box, TextField, Typography } from "@mui/material";
import TimePickerComponent from "./TimePickerComponent";
import { getColours } from "../../state/ColourSlice";
import { setMaxValue } from "../../utils/TimerUtils";

export default function TimePicker() {
  const colours = useSelector((state) => getColours(state));
  const [label, setLabel] = useState("New timer");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const onChangeLabel = (event) => {
    setLabel(event.target.value);
  };

  const timeComponentObjects = [
    {
      time: hours,
      text: "HOURS",
      onChange: (event) => setHours(setMaxValue(event.target.value, 99)),
      maxValue: 99,
    },
    {
      time: minutes,
      text: "MINUTES",
      onChange: (event) => setMinutes(setMaxValue(event.target.value, 59)),
      maxValue: 59,
    },
    {
      time: seconds,
      text: "SECONDS",
      onChange: (event) => setSeconds(setMaxValue(event.target.value, 59)),
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
