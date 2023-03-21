// Importing modules
import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import GridItem from "../components/GridItem";

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
            margin={2}
            style={{ backgroundColor: props.colour_tertiary, flex: 1 }}
          >
            placeholder
          </Box>
        }
        border="solid"
        flexGrow={1}
      />

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
