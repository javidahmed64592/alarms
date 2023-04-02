import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

export default function ActionMenuItem(props) {
  return (
    <MenuItem
      dense
      onClick={props.onClick}
      disableRipple
      style={{
        color: props.textColour,
        backgroundColor: props.backgroundColor,
      }}
    >
      <ListItemIcon
        style={{
          color: props.textColour,
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.icon}
      </ListItemIcon>
      <Typography
        style={{
          color: props.textColour,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {props.label}
      </Typography>
    </MenuItem>
  );
}
