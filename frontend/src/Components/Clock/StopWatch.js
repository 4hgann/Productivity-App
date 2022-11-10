import { Button } from "antd";
import { useEffect, useState } from "react"

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
        <div>
            <p>{seconds}</p>
            <Button onClick={() => toggleTimer()}>{isRunning ? "Stop" : "Start" }</Button>
        </div>
    )
}
export default StopWatch;