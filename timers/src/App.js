import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { getColours } from "./state/ColourSlice";
import { useSelector } from "react-redux";

const AppProps = {
  addButtonText: "Add Timer",
  loadButtonText: "Load Preset",
  saveButtonText: "Save Preset",
};

export default function App() {
  const colours = useSelector((state) => getColours(state));

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      className="App"
      style={{ backgroundColor: colours.secondary }}
    >
      <NavBar />
      <HomePage
        addButtonText={AppProps.addButtonText}
        loadButtonText={AppProps.loadButtonText}
        saveButtonText={AppProps.saveButtonText}
      />
    </Box>
  );
}
