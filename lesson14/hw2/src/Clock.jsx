import React, { useState, useEffect } from "react";
import "./clock.scss";
import moment from "moment";
import getTimeWithOffset from "./getTimeWithOffset.js";

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(
    moment(getTimeWithOffset(offset)).format("h:mm:ss A")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment(getTimeWithOffset(offset)).format("h:mm:ss A"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [offset, location]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};
export default Clock;
