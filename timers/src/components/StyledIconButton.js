import * as React from "react";
import { IconButton } from "@mui/material";

export default function StyledIconButton(props) {
  return (
    <IconButton
      variant={props.variant}
      disabled={props.disabled}
      onClick={props.onClick}
      size={props.size}
      style={{
        color: props.iconColor,
      }}
    >
      {props.icon}
    </IconButton>
  );
}
