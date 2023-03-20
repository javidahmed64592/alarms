import "./App.css";
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
    <div
      className="App"
      style={{ backgroundColor: AppProps.colour_background }}
    >
      <NavBar
        colour_primary={AppProps.colour_primary}
        colour_text={AppProps.colour_text}
      />
      <HomePage colour_text={AppProps.colour_text} />
    </div>
  );
}

export default App;
