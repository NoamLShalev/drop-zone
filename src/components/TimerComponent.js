import React from "react";

// CSS
import "../css/TimerComponent.css";

const TimerComponent = ({ interval, timeLeft }) => {
  let timeLeftArray = timeLeft.toString().padStart(2, "0").split("");
  timeLeftArray = timeLeftArray.map((number, index) => {
    return (
      <span key={index} className="number black-and-white rozha">
        {number}
      </span>
    );
  });

  return (
    <div className="timer-component">
      <div className="numbers-container">{timeLeftArray}</div>
      <span className="interval roboto">{interval.toUpperCase()}</span>
    </div>
  );
};

export default TimerComponent;
