import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ActionMenu from "./ActionMenu";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";

export default function NavBar(props) {
  const actionMenuItems = [
    {
      icon: <SaveIcon />,
      label: "Save Preset",
      onClick: () => alert("Clicked save!"),
    },
    {
      icon: <UploadFileIcon />,
      label: "Load Preset",
      onClick: () => alert("Clicked load!"),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: props.colour_primary }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color={props.colour_text}
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            TIMERS
          </Typography>
          <ActionMenu
            colour_primary={props.colour_tertiary}
            colour_text={props.colour_primary}
            buttonColour={props.colour_text}
            items={actionMenuItems}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
