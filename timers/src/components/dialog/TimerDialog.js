import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import TimePicker from "./TimePicker";
import StyledIconButton from "../buttons/StyledIconButton";
import { getColours } from "../../state/ColourSlice";
import { resetDetails, getTimerDetails } from "../../state/TimerDetailsSlice";
import { addTimer } from "../../state/TimerSlice";
import { HMSToTotal } from "../../utils/TimerUtils";

export default function TimerDialog(props) {
  const dispatch = useDispatch();
  const colours = useSelector((state) => getColours(state));
  const { label, hours, minutes, seconds } = useSelector((state) =>
    getTimerDetails(state)
  );
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(resetDetails());
  };

  const updateTimer = () => {
    dispatch(
      addTimer({ label: label, setTime: HMSToTotal(hours, minutes, seconds) })
    );
    handleClose();
  };

  return (
    <Box>
      <StyledIconButton
        variant="contained"
        icon={<AddIcon fontSize="inherit" />}
        onClick={handleClickOpen}
        size={"large"}
      />
      <Dialog open={open} onClose={handleClose}>
        <Box
          display="inline-block"
          border={2}
          borderColor={colours.primary}
          style={{
            backgroundColor: colours.secondary,
          }}
        >
          <DialogTitle
            color={colours.primary}
            style={{ fontSize: 36, textAlign: "center" }}
          >
            Add Timer
          </DialogTitle>
          <DialogContent>
            <TimePicker />
          </DialogContent>
          <DialogActions>
            <Button
              style={{ color: colours.primary, fontWeight: "bold" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{ color: colours.primary, fontWeight: "bold" }}
              onClick={updateTimer}
            >
              Add
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
