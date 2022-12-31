import { Button, message } from "antd"
import { useEffect, useState } from "react"
import SetTimePane from "./SetTimePane"

import "../../Styles/Timer.css"
import "../../Styles/TimeFont.css"

const Timer = () => {
  const [[hours, minutes, seconds], setTime] = useState([0, 0, 0])
  const [isRunning, setRunning] = useState(false)

  // For receiving input from SetTimePane
  const handleTimeInput = ([hrs, mins, secs]) => {
    setTime([hrs, mins, secs])
  }

  // Call the tick function every second or clear it if it is finished counting down.
  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => tick(), 1000)
    } else if (!isRunning) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, hours, minutes, seconds])

  // Handles the logic for changing time. Gets called every second to 'tick' down the timer
  const tick = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      message.success("Time is up!")
      setRunning(false)
    } else if (minutes === 0 && seconds === 0) {
      setTime([hours - 1, 59, 59])
    } else if (seconds === 0) {
      setTime([hours, minutes - 1, 59])
    } else {
      setTime([hours, minutes, seconds - 1])
    }
  }

  const handleClick = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      message.error("You need to select a time")
    } else {
      setRunning(!isRunning)
      if (!isRunning) {
        message.success("Starting timer")
      } else {
        message.warn("Pausing timer")
      }
    }
  }

  return (
    <div className="timer">
      <p className="time">
        {`
                ${hours.toString().padStart(2, "0")} :
                ${minutes.toString().padStart(2, "0")} :
                ${seconds.toString().padStart(2, "0")}
                `}
      </p>
      <div className="mainButtons">
        <Button className="timerButton" onClick={() => handleClick()}>
          {isRunning ? "Pause" : "Start"}
        </Button>
      </div>
      <div className="bottom">
        <SetTimePane callbackHandler={handleTimeInput} />
      </div>
    </div>
  )
}

export default Timer
