import { createContext, useState } from 'react';

export const UIContext = createContext({});

export function UIContextProvider({ children }){
  
  const [showTodos, toggleTodos] = useState(false);
  const [showClock, toggleClock] = useState(false);

  const toggle = (name) => {
    if(name === 'todo'){
      toggleTodos(!showTodos);
    }
    else if(name =='clock'){
      console.log('check')
      toggleClock(!showClock);
    }
  }

  const getDisplayValue = (name) => {
    if(name === 'todo'){
      return showTodos;
    }
    else if(name === 'clock'){
      return showClock;
    }
  }

  const context = {
    showTodos, showClock, toggle, getDisplayValue
  }

  return (
    <UIContext.Provider value={context}>
      {children}
    </UIContext.Provider>
  )
}
