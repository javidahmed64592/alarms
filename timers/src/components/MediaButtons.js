import * as React from "react";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StyledIconButton from "./StyledIconButton";
import { startTimers, stopTimers, resetTimers } from "../state/TimerSlice";

export default function MediaButtons() {
  const dispatch = useDispatch();

  return (
    <Stack direction="row" margin={1} spacing={2}>
      <StyledIconButton
        variant="contained"
        icon={<PlayArrowIcon fontSize="inherit" />}
        onClick={() => dispatch(startTimers())}
        size={"large"}
      />
      <StyledIconButton
        variant="contained"
        icon={<PauseIcon fontSize="inherit" />}
        onClick={() => dispatch(stopTimers())}
        size={"large"}
      />
      <StyledIconButton
        variant="contained"
        icon={<RestartAltIcon fontSize="inherit" />}
        onClick={() => dispatch(resetTimers())}
        size={"large"}
      />
    </Stack>
  );
}
