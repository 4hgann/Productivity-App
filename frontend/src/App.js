import './App.css';
import { useState } from 'react';
import AnalogClock from 'analog-clock-react';

function App() {

  const [hour,setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [options, setOptions] = useState({
    width: "15vw",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#ff0000",
      minute: "#000000",
      hour: "#000000"
    }
  })

  const updateClock = () => {
    let ausTime = new Date().toLocaleString("en-NZ");
    let date = new Date(ausTime);
    setMinute(date.getMinutes())
    setHour(date.getHours())


  setOptions({
    ...options,
    seconds: date.getSeconds(),
    minutes: minute,
    hours: hour,
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
        <AnalogClock {...options}/>
        <p>{hour}:{minute}</p>
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
