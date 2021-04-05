import React from "react";

// Styling
import "../css/App.css";

// Components
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h2 className="roboto">LEEZY BOOST 103</h2>
        <CountdownTimer />
        <p className="description roboto">UNTIL DROP</p>
      </div>
    </div>
  );
};

export default App;
