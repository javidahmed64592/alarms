import { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ActionMenuItem from "./ActionMenuItem";
import Card from "@mui/material/Card";
import { getColours } from "../../state/ColourSlice";

export default function ActionMenu(props) {
  const colours = useSelector((state) => getColours(state));
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
        sx={{ color: props.iconColour }}
        aria-label="menu"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ disablePadding: true }}
      >
        <Card
          variant="outlined"
          style={{
            backgroundColor: colours.tertiary,
            border: "2px solid",
            borderColor: colours.primary,
          }}
        >
          <MenuList>
            {props.items.map((item) => {
              return (
                <ActionMenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  onClick={item.onClick}
                />
              );
            })}
          </MenuList>
        </Card>
      </Menu>
    </Box>
  );
}
