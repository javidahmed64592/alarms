import { useSelector } from "react-redux";
import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getColours } from "../state/ColourSlice";

export default function TimerComponentDisplay(props) {
  const colours = useSelector((state) => getColours(state));

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
          backgroundColor: colours.tertiary,
          border: "1px solid",
          borderColor: colours.primary,
        }}
      >
        <Typography
          style={{
            color: colours.primary,
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
          color: colours.primary,
          margin: 2,
          fontSize: "12px",
        }}
      >
        {props.timeComponentText}
      </Typography>
    </Stack>
  );
}
