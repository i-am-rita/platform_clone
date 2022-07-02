import React from "react";
import Navbar from "../components/Navbar";
import './App.scss'

const App = () => {
  return (
    <div className="app">
      {/* <h2>Welcome {new Date().toDateString()}</h2> */}
      <Navbar/>
    </div>
  );
};

export default App;
