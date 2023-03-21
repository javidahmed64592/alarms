import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import GridItem from "../components/GridItem";
import StyledButton from "../components/StyledButton";

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
            style={{ color: props.colour_text, margin: 10, fontSize: "24px" }}
          >
            No timers set! Add new timers or load a preset.
          </Typography>
        }
      />

      <GridItem
        item={
          <Box
            margin={1}
            style={{ backgroundColor: props.colour_tertiary, flex: 1 }}
          >
            placeholder
          </Box>
        }
        border="solid"
        flexGrow={1}
      />

      <Stack direction="row" margin={1} spacing={2}>
        <StyledButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => alert("Clicked add!")}
          backgroundColor={props.colour_primary}
          borderColour={props.colour_tertiary}
          label={props.addButtonText}
        />
        <StyledButton
          variant="contained"
          startIcon={<UploadFileIcon />}
          onClick={() => alert("Clicked load!")}
          backgroundColor={props.colour_primary}
          borderColour={props.colour_tertiary}
          label={props.loadButtonText}
        />
        <StyledButton
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
