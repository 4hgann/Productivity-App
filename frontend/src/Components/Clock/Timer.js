import { Button, message } from 'antd';
import { useContext, useEffect, useState } from 'react'
import '../../Styles/Timer.css'
import 'antd/lib/button/style/index.css'
import SetTimePane from './SetTimePane';

const Timer = () => {
    const [[hours, minutes, seconds], setTime] = useState([0,0,0]);
    const [startTimer, setTimer] = useState(false)
    const [intervalID, setIntervalID] = useState([])

    // For receiving input from SetTimePane
    const handleTimeInput = ([hrs, mins, secs]) => {
        setTime([hrs, mins, secs])
    }

    // Call the tick function every second or clear it if it is finished counting down.
    useEffect(() => {
        let interval;
        if(startTimer){
            interval = setInterval( () => tick(), 1000);
        }
        else if (!startTimer) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [startTimer, hours, minutes, seconds])

    // Handles the logic for changing time. Gets called every second to 'tick' down the timer
    const tick = () => {
        if(hours === 0 && minutes === 0 && seconds === 0){
            message.success('Time is up!')
            setTimer(false)
        }
        else if (minutes === 0 && seconds === 0){
            setTime([hours - 1, 59, 59])
        }
        else if (seconds === 0){
            setTime([hours, minutes - 1, 59])
        }
        else{
            setTime([hours, minutes, seconds - 1])
        }
    }

    const start = () => {
        if(hours === 0 && minutes === 0 && seconds === 0){
            message.error('You need to select a time')
        }
        else{
            message.success('Timer is now starting')
            setTimer(true)
        }
    }

    const stop = () => {
            message.success('Timer is now pausing')
            setTimer(false)
    }

    return(
        <div className='timer'>
            <p>{`
                ${hours.toString().padStart(2, '0')}:
                ${minutes.toString().padStart(2, '0')}:
                ${seconds.toString().padStart(2, '0')}
                `}
            </p>
            <div className='mainButtons'>
                <Button className = 'timerButton' onClick={start}>Start</Button>
                <Button className='timerButton' onClick={stop}>Pause</Button>
            </div>
            <div className="bottom">
                <SetTimePane callbackHandler={handleTimeInput}/>
            </div>
        </div>
    )
}

export default Timer;