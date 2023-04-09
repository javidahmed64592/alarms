import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import { pages } from "./public/Pages";
import { getColours } from "./state/ColourSlice";
import { getPage } from "./state/PageSlice";

export default function App() {
  const colours = useSelector((state) => getColours(state));
  const pageState = useSelector((state) => getPage(state));

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      className="App"
      style={{ backgroundColor: colours.secondary }}
    >
      <NavBar />
      {pages[pageState]}
    </Box>
  );
}
