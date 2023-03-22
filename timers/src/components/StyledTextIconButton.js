import * as React from "react";
import { Button } from "@mui/material";

export default function StyledTextIconButton(props) {
  return (
    <Button
      variant={props.variant}
      disabled={props.disabled}
      startIcon={props.startIcon}
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
      }}
    >
      {props.label}
    </Button>
  );
}
