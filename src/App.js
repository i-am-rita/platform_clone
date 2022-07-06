import React from "react";
import Navbar from "../components/Navbar";
import "./App.scss";
import Content from "./content";

const App = () => {
  return (
    <div className="app">
      {/* <h2>Welcome {new Date().toDateString()}</h2> */}
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
