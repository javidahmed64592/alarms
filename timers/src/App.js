import "./App.css";
import { Box } from "@mui/material";
import colours from "./public/Colours";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";

const AppProps = {
  colour_primary: colours.primary,
  colour_background: colours.secondary,
  colour_tertiary: colours.tertiary,
  colour_text: colours.text,
  addButtonText: "Add Timer",
  loadButtonText: "Load Preset",
  saveButtonText: "Save Preset",
};

function App() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      className="App"
      style={{ backgroundColor: AppProps.colour_background }}
    >
      <NavBar
        colour_primary={AppProps.colour_primary}
        colour_text={AppProps.colour_text}
      />
      <HomePage
        colour_primary={AppProps.colour_primary}
        colour_background={AppProps.colour_background}
        colour_text={AppProps.colour_text}
        colour_tertiary={AppProps.colour_tertiary}
        addButtonText={AppProps.addButtonText}
        loadButtonText={AppProps.loadButtonText}
        saveButtonText={AppProps.saveButtonText}
      />
    </Box>
  );
}

export default App;
