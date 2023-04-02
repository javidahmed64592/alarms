import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function StyledTextIconButton(props) {
  const colours = useSelector((state) => getColours(state));

  return (
    <Button
      variant={props.variant}
      disabled={props.disabled}
      startIcon={props.startIcon}
      onClick={props.onClick}
      style={{
        backgroundColor: colours.secondary,
        borderColor: colours.primary,
      }}
    >
      {props.label}
    </Button>
  );
}
