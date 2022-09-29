import { createContext, useEffect, useState } from 'react';

export const TimeContext = createContext({});

export function TimeContextProvider({ children }){

    const [secs, setSecs] = useState(null);
    const [mins, setMins] = useState(null);
    const [hrs, setHrs] = useState(null);
  
    const context = {
        secs, mins, hrs, setSecs, setMins, setHrs
    }

  return (
    <TimeContext.Provider value={context}>
      {children}
    </TimeContext.Provider>
  )
}
