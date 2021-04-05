import React, { useEffect, useState } from "react";

// CSS
import "../css/CountdownTimer.css";

// Helpers
import { calculateTimeLeft } from "../helpers";

// Components
import TimerComponent from "./TimerComponent";

const CountdownTimer = () => {
  const [milliseconds, setMilliseconds] = useState(1152725000);
  const timeLeft = calculateTimeLeft(milliseconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (milliseconds > 0) {
        setMilliseconds(milliseconds - 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <TimerComponent
        key={interval}
        interval={interval}
        timeLeft={timeLeft[interval]}
      />
    );
  });
  return <div className="countdown-timer">{timerComponents}</div>;
};

export default CountdownTimer;
