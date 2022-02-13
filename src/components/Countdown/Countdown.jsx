import React, { useEffect, useState } from "react";
import './Countdown.css';


const Countdown = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let countDownDate = new Date("May 1, 2022 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + " - " + hours + " - " + minutes + " - " + seconds);
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
     
    }, 1000);
  }, []);
  return (
    <div className="countdown">
    <h2 className="countdown-title">TIME REMAINING TO UNLEASH HELL</h2>
    <ul className="countdown-list">
        <li>Days</li>
        <li>Hours</li>
        <li>Min</li>
        <li>Sec</li>
    </ul>
      <h2>{time}</h2>
    </div>
  );
};

export default Countdown;
