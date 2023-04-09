import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";
import ActionMenu from "./menu/ActionMenu";
import { getColours } from "../state/ColourSlice";
import { getNavbarHeader } from "../state/PageSlice";

export default function NavBar() {
  const colours = useSelector((state) => getColours(state));
  const navbarHeader = useSelector((state) => getNavbarHeader(state));

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
            {navbarHeader}
          </Typography>
          <ActionMenu iconColour={colours.quaternary} items={actionMenuItems} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
