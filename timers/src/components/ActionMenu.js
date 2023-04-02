import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ActionMenuItem from "./ActionMenuItem";
import Paper from "@mui/material/Paper";

export default function ActionMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="end"
        disabled={props.disabled}
        sx={{ color: props.buttonColour }}
        aria-label="menu"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Paper>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuList>
            {props.items.map((item) => {
              return (
                <ActionMenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  onClick={item.onClick}
                  textColour={props.colour_text}
                  backgroundColor={props.colour_primary}
                />
              );
            })}
          </MenuList>
        </Menu>
      </Paper>
    </Box>
  );
}
