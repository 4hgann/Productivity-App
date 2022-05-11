import './App.css';
import AnalogClock from 'analog-clock-react';
import { useState, useEffect } from 'react';

function App() {

  let options = {
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
  };

  const updateClock = () => {
    let ausTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
    let date = new Date(ausTime);

    this.setState({
      'options': {
        ...this.state.options,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours()
      }
    })
  }

  setInterval(updateClock, 1000);


  return (
    <div className="main">
    <div className="row">
      <div className="col card">
        Todo
      </div>
      <div className="col card">
        <AnalogClock {...options} />
      </div>
    </div>
    <div className="row">
      <div className="col card">
        Todo
      </div>
      <div className="col card">
        Weather
      </div>
    </div>
    </div>

  );
}

export default App;
