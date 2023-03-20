// Importing modules
import React, { useState, useEffect } from "react";

function HomePage(props) {
  const [data, setData] = useState({
    title: "",
    date: "",
  });

  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setData({
          date: data.time_now,
        });
      })
    );
  }, []);

  return (
    <div>
      <header className="App-header" style={{ color: props.colour_text }}>
        <h3>No timers set! Add new timers or load a preset.</h3>
      </header>
      <footer style={{ color: props.colour_text }}>
        Last refresh: {data.date}
      </footer>
    </div>
  );
}

export default HomePage;
