import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import GridItem from "../components/GridItem";
import TimerObject from "../components/TimerObject";
import StyledTextIconButton from "../components/StyledTextIconButton";
import StyledIconButton from "../components/StyledIconButton";

function HomePage(props) {
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

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      style={{
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <GridItem
        item={
          <Typography
            style={{ color: props.colour_text, margin: 6, fontSize: "24px" }}
          >
            No timers set! Add new timers or load a preset.
          </Typography>
        }
      />

      <GridItem
        item={
          <Box margin={1} style={{ flex: 1 }}>
            <TimerObject
              label={"Timer 1"}
              hours={0}
              minutes={100}
              seconds={5}
              started={false}
              colour_secondary={props.colour_background}
              colour_text={props.colour_primary}
              backgroundColor={props.colour_tertiary}
            />
            <StyledIconButton
              variant="contained"
              icon={<AddIcon fontSize="inherit" />}
              onClick={() => alert("Clicked add!")}
              size={"large"}
              iconColor={props.colour_primary}
              borderColour={props.colour_tertiary}
            />
          </Box>
        }
        flexGrow={1}
      />

      <Stack direction="row" margin={1} spacing={2}>
        <StyledIconButton
          variant="contained"
          icon={<PlayArrowIcon fontSize="inherit" />}
          onClick={() => alert("Clicked play!")}
          size={"large"}
          iconColor={props.colour_primary}
          borderColour={props.colour_tertiary}
        />
        <StyledIconButton
          variant="contained"
          icon={<PauseIcon fontSize="inherit" />}
          onClick={() => alert("Clicked pause!")}
          size={"large"}
          iconColor={props.colour_primary}
          borderColour={props.colour_tertiary}
        />
        <StyledIconButton
          variant="contained"
          icon={<RestartAltIcon fontSize="inherit" />}
          onClick={() => alert("Clicked reset!")}
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

      <GridItem
        item={
          <Typography style={{ color: props.colour_text }}>
            Last refresh: {data.date}
          </Typography>
        }
      />
    </Grid>
  );
}

export default HomePage;
