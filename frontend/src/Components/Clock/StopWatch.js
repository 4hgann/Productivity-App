import { Button } from "antd";

import { useEffect, useState } from "react"

import '../../Styles/Timer.css'
import '../../Styles/TimeFont.css'
import '../../Styles/TimePane.css'

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if(isRunning){
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000);
        }
        else if(!isRunning && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds])


    const toggleTimer = () =>{
        setRunning(!isRunning)
    }

    return(
        <>
        <div className="timer">
            <p className="time">
                {`
                ${(Math.floor(seconds/3600)).toString().padStart(2, '0')} :
                ${(Math.floor(seconds/60)).toString().padStart(2, '0')} :
                ${(seconds % 60).toString().padStart(2, '0')}
                `}
            </p>
        </div>
            <div className="bottom">
                <Button className="add-button" onClick={() => toggleTimer()} type="primary" block>{isRunning ? "Stop" : "Start" }</Button>
            </div>
        </>
    )
}
export default StopWatch;