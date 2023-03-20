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
          title: data.title,
          date: data.time_now,
        });
      })
    );
  }, []);

  return (
    <header className="App-header" style={{ color: props.colour_text }}>
      <h1>React and Flask</h1>
      <p>{data.title}</p>
      <p>{data.date}</p>
    </header>
  );
}

export default HomePage;
