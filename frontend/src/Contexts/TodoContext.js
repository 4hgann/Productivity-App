import { createContext, useEffect, useState } from 'react';

export const todoContext = createContext({});

export function TodoContextProvider({ children }){

    // Format of todos: {name: string, due: unix date-time number, isCompleted: boolean}
    const [todos,setTodos] = useState([{name:'dishes', due: '21/07', isCompleted: false}])
    const [earliestFirst, setEarliestFirst] = useState(false)

    // Input validation and add the todo to array if valid else log 'error'
    const addTodo = (todo) => {

    }

    // Given an index, remove that todo from todos
    const deleteTodo = (index) => {

    }

    // Given an index of a todo, toggle the complete status
    const toggleComplete = (index) => {

    }

    useEffect(() => {
        const unorderedTodos = [...todos]
        // Order by date

        if(!earliestFirst){
            // Reverse the todos
        }

        // setTodos(orderedTodos)
    }, [todos])
  

  const context = {
    todos, earliestFirst, addTodo, deleteTodo, toggleComplete
  }

  return (
    <todoContext.Provider value={context}>
      {children}
    </todoContext.Provider>
  )
}
