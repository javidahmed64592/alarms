import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { getColours } from "../state/ColourSlice";

export default function ActionMenuItem(props) {
  const colours = useSelector((state) => getColours(state));

  return (
    <MenuItem
      dense
      onClick={props.onClick}
      disableRipple
      style={{
        backgroundColor: colours.tertiary,
      }}
    >
      <ListItemIcon
        style={{
          color: colours.primary,
          backgroundColor: colours.tertiary,
        }}
      >
        {props.icon}
      </ListItemIcon>
      <Typography
        style={{
          color: colours.primary,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {props.label}
      </Typography>
    </MenuItem>
  );
}
