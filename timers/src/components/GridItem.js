import * as React from "react";
import { Grid } from "@mui/material";

export default function GridItem(props) {
  return (
    <Grid
      item
      style={{
        border: props.border,
        minWidth: "100%",
        height: "fit-content",
        flexGrow: props.flexGrow,
      }}
    >
      {props.item}
    </Grid>
  );
}
