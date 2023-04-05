import { useSelector } from "react-redux";
import { Box, Typography, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { getColours } from "../../state/ColourSlice";
import { zeroFill } from "../../utils/TimerUtils";

export default function TimePickerComponent(props) {
  const colours = useSelector((state) => getColours(state));

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
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
          id={props.id}
          value={zeroFill(props.value)}
          placeholder={zeroFill(0)}
          onChange={props.onChange}
          fullWidth
          sx={{
            input: {
              color: colours.primary,
              textAlign: "center",
              fontSize: "36px",
            },
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
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
