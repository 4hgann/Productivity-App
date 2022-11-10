import { createContext, useEffect, useState } from 'react';

export const TimeContext = createContext({});

export function TimeContextProvider({ children }){

    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [counter, setCounter] = useState(0)

    const context = {
        secs, mins, hrs, counter, setSecs, setMins, setHrs, setCounter
    }

  return (
    <TimeContext.Provider value={context}>
      {children}
    </TimeContext.Provider>
  )
}
