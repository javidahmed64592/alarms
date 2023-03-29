import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Stack } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TimerListItem from "../components/TimerListItem";
import StyledTextIconButton from "../components/StyledTextIconButton";
import StyledIconButton from "../components/StyledIconButton";
import AddTimerDialog from "../components/AddTimerDialog";
import {
  selectList,
  startTimers,
  stopTimers,
  resetTimers,
} from "../state/TimerSlice";

function HomePage(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    date: "",
  });

  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setData({
          date: data.time_now,
        });
      })
    );
  }, []);

  const timers = useSelector((state) => selectList(state));

  return (
    <Stack
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      overflow="auto"
      style={{
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        overflow="auto"
        style={{
          flex: 1,
        }}
      >
        {timers.length ? (
          timers.map((timer) => {
            return (
              <TimerListItem
                id={timer.id}
                key={timer.id}
                label={timer.label}
                colour_primary={props.colour_primary}
                colour_secondary={props.colour_background}
                colour_tertiary={props.colour_tertiary}
                colour_text={props.colour_primary}
                backgroundColor={props.colour_tertiary}
              />
            );
          })
        ) : (
          <Typography
            style={{
              color: props.colour_text,
              margin: 6,
              fontSize: "24px",
            }}
          >
            No timers set! Add new timers or load a preset.
          </Typography>
        )}
      </Stack>

      <Stack direction="row" margin={1} spacing={2}>
        <StyledIconButton
          variant="contained"
          icon={<PlayArrowIcon fontSize="inherit" />}
          onClick={() => dispatch(startTimers())}
          size={"large"}
          iconColor={props.colour_primary}
          borderColour={props.colour_tertiary}
        />
        <StyledIconButton
          variant="contained"
          icon={<PauseIcon fontSize="inherit" />}
          onClick={() => dispatch(stopTimers())}
          size={"large"}
          iconColor={props.colour_primary}
          borderColour={props.colour_tertiary}
        />
        <StyledIconButton
          variant="contained"
          icon={<RestartAltIcon fontSize="inherit" />}
          onClick={() => dispatch(resetTimers())}
          size={"large"}
          iconColor={props.colour_primary}
          borderColour={props.colour_tertiary}
        />
      </Stack>

      <Stack direction="row" margin={1} spacing={2}>
        <StyledTextIconButton
          variant="contained"
          startIcon={<UploadFileIcon />}
          onClick={() => alert("Clicked load!")}
          backgroundColor={props.colour_primary}
          borderColour={props.colour_tertiary}
          label={props.loadButtonText}
        />
        <StyledTextIconButton
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => alert("Clicked save!")}
          backgroundColor={props.colour_primary}
          borderColour={props.colour_tertiary}
          label={props.saveButtonText}
        />
      </Stack>

      <Typography style={{ color: props.colour_text }}>
        Last refresh: {data.date}
      </Typography>
    </Stack>
  );
}

export default HomePage;
