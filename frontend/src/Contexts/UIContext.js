import { createContext, useState } from 'react';

export const UIContext = createContext({});

export function UIContextProvider({ children }){
  
  const [showTodos, toggleTodos] = useState(false);
  const [showClock, toggleClock] = useState(false);
  const [showWeather, toggleWeather] = useState(false);

  const toggle = (name) => {
    if(name === 'todo'){
      toggleTodos(!showTodos);
    }
    else if(name == 'clock'){
      toggleClock(!showClock);
    }
    else if(name == 'weather'){
      toggleWeather(!showWeather)
    }
  }

  const getDisplayValue = (name) => {
    if(name === 'todo'){
      return showTodos;
    }
    else if(name === 'clock'){
      return showClock;
    }
    else if(name == 'weather'){
      return showWeather;
    }
  }

  const context = {
    showTodos, showClock, showWeather, toggle, getDisplayValue
  }

  return (
    <UIContext.Provider value={context}>
      {children}
    </UIContext.Provider>
  )
}
