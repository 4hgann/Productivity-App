import { Button, message } from 'antd';
import { useContext, useEffect, useState } from 'react'
import '../../Styles/Timer.css'
import 'antd/lib/button/style/index.css'
import SetTimePane from './SetTimePane';
import { TimeContext } from '../../Contexts/TimeContext';

const Timer = () => {

    const { secs, hrs, mins } = useContext(TimeContext)
    const [[hours, minutes, seconds], setTime] = useState([hrs,mins,secs]);
    const [startTimer, setTimer] = useState(false)

    useEffect(() => {
        setTime([hrs, mins, secs])
    }, [hrs, mins, secs])

    useEffect(() => {
        if(startTimer){
            interval = setInterval(tick, 1000);
        }
        else{
            clearInterval(interval);
        }
    }, [startTimer, hours, minutes, seconds])


    let interval = null;

    const tick = () => {
        console.log([hours,minutes,seconds])
        if(hours === 0 && minutes === 0 && seconds === 0){
            message.success('Time is up!')
            stop();
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
        if(interval === null){
            message.success('Timer is now starting')
            setTimer(true)
        }
        else{
        }
    }

    const stop = () => {
        if(interval !== null){
            message.success('Timer is now pausing')
            setTimer(false)
        }
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
                <SetTimePane/>
            </div>
        </div>
    )
}

export default Timer;