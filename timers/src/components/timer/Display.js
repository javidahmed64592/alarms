import { Stack } from "@mui/system";
import TimeComponent from "./TimeComponent";

export default function Display(props) {
  const timeText = [props.hoursText, props.minutesText, props.secondsText];
  const timeComponentText = ["HOURS", "MINUTES", "SECONDS"];

  return (
    <Stack
      direction="row"
      spacing={1}
      margin={1}
      justifyContent="center"
      alignItems="center"
    >
      {timeText.map((timeValue, index) => {
        return (
          <TimeComponent
            key={timeComponentText[index]}
            timeValue={timeValue}
            timeComponentText={timeComponentText[index]}
          />
        );
      })}
    </Stack>
  );
}
