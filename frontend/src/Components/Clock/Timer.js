import { Button, message } from 'antd';
import { useState } from 'react'
import '../../Styles/Timer.css'
import 'antd/lib/button/style/index.css'

const Timer = () => {

    const [[hrs, mins, secs], setTime] = useState([0,0,0]);
    const interval = null;

    const tick = () => {
        if(hrs === 0 && mins === 0 && secs === 0){
            message.success('Time is up!')
        }
        else if (mins === 0 && secs === 0){
            setTime([hrs - 1, 59, 59])
        }
        else if (secs === 0){
            setTime([hrs, mins - 1, 59])
        }
        else{
            setTime([hrs, mins, secs - 1])
        }
    }

    const start = () => {
        if(interval === null){
            message.success('Timer is now starting')
        }
        else{
            interval = setInterval(tick, 1000)
        }
    }

    const stop = () => {
        if(interval !== null){
            clearInterval(interval)
        }
    }

    return(
        <div>
            <p>{`
                ${hrs.toString().padStart(2, '0')}:
                ${mins.toString().padStart(2, '0')}:
                ${secs.toString().padStart(2, '0')}
                `}
            </p>
            <div className='mainButtons'>
                <Button className = 'timerButton' onClick={start}>Start</Button>
                <Button className='timerButton' onClick={stop}>Pause</Button>
            </div>
            <div className="bottom">
                <Button type="primary" block className='form-button'>Set Time</Button>
            </div>
        </div>
    )
}

export default Timer;