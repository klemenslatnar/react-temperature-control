import React, { useState } from "react";
import "./TemperatureControl.css";

function TemperatureControl() {
  const [temp, setTemp] = useState(0);
  const plus = () => {
    setTemp((prevTemp) => prevTemp + 1);
  };
  const minus = () => {
    setTemp((prevTemp) => prevTemp - 1);
  };

  return (
    <div className="temp-control">
      <p className="temp-name">Temperature Control</p>
      <div className="square">
        <div
          className="temp-circle"
          style={{
            backgroundColor:
              temp > 0
                ? "#FF3C3C"
                : temp === 0
                ? "rgb(216, 216, 216)"
                : " #0dbcff",
          }}
        >
          {temp}°C
        </div>
        <div className="circles">
          <button onClick={plus} className="left-circle">
            +
          </button>
          <button onClick={minus} className="right-circle">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemperatureControl;
