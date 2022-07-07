import { createContext, useState } from 'react';

export const UIContext = createContext({});

export function UIContextProvider({ children }){
  
  const [showTodos, toggleTodos] = useState(false);
  const [showClock, toggleClock] = useState(false);

  const toggle = (name) => {
    if(name === 'todo'){
      console.log('toggle todo')
      toggleTodos(!showTodos);
    }
  }

  const getDisplayValue = (name) => {
    if(name === 'todo'){
      return showTodos;
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
