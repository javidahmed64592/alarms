import * as React from "react";
import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function TimerDisplay(props) {
  const timeText = [props.hoursText, props.minutesText, props.secondsText];
  const timeComponentText = ["HOURS", "MINUTES", "SECONDS"];

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Typography
        style={{
          color: props.colour_text,
          fontSize: "48px",
        }}
      >
        {props.label}
      </Typography>

      <Stack direction="row" margin={0} spacing={2}>
        {timeText.map((text, index) => {
          return (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Card
                variant="outlined"
                style={{
                  backgroundColor: props.backgroundColor,
                  border: "1px solid",
                  borderColor: props.colour_text,
                }}
              >
                <Typography
                  style={{
                    color: props.colour_text,
                    marginLeft: 8,
                    marginRight: 8,
                    fontSize: "48px",
                  }}
                >
                  {text}
                </Typography>
              </Card>
              <Typography
                style={{
                  color: props.colour_text,
                  margin: 4,
                  fontSize: "14px",
                }}
              >
                {timeComponentText[index]}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
