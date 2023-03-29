import * as React from "react";
import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function TimerComponentDisplay(props) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
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
          {props.timeValue}
        </Typography>
      </Card>
      <Typography
        style={{
          color: props.colour_text,
          margin: 2,
          fontSize: "12px",
        }}
      >
        {props.timeComponentText}
      </Typography>
    </Stack>
  );
}
