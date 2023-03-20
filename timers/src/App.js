import "./App.css";
import { Box } from "@mui/material";
import colours from "./public/Colours";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";

const AppProps = {
  colour_primary: colours.primary,
  colour_background: colours.secondary,
  colour_text: colours.text,
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
        colour_background={AppProps.colour_background}
        colour_text={AppProps.colour_text}
      />
    </Box>
  );
}

export default App;
