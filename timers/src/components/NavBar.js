import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ActionMenu from "./ActionMenu";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import { getColours } from "../state/ColourSlice";

export default function NavBar(props) {
  const colours = useSelector((state) => getColours(state));

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
      <AppBar position="static" style={{ background: colours.primary }}>
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
            color={colours.quaternary}
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            TIMERS
          </Typography>
          <ActionMenu iconColour={colours.quaternary} items={actionMenuItems} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
