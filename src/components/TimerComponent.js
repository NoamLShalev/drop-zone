import React from "react";

// CSS
import "../css/TimerComponent.css";

const TimerComponent = ({ timeUnit, timeLeft }) => {
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
      <span className="time-unit roboto">{timeUnit.toUpperCase()}</span>
    </div>
  );
};

export default TimerComponent;
