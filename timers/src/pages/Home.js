import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Stack } from "@mui/material";
import TimerListItem from "../components/TimerListItem";
import AddTimerDialog from "../components/AddTimerDialog";
import MediaButtons from "../components/MediaButtons";
import { selectList } from "../state/TimerSlice";

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
        <AddTimerDialog
          colour_primary={props.colour_primary}
          colour_tertiary={props.colour_tertiary}
        />
      </Stack>

      <MediaButtons
        colour_primary={props.colour_primary}
        colour_tertiary={props.colour_tertiary}
      />

      <Typography style={{ color: props.colour_text }}>
        Last refresh: {data.date}
      </Typography>
    </Stack>
  );
}

export default HomePage;
