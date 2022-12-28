import { createContext, useEffect, useState } from 'react';

export const todoContext = createContext({});

export function TodoContextProvider({ children }){

    // Format of todos: {name: string, due: unix date-time number, isCompleted: boolean}
    const [todos,setTodos] = useState([])
    const [earliestFirst, setEarliestFirst] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const toggleOrder = () => {
      setEarliestFirst((value) => !value)
      setRefresh((value) => !value)
    }

    // Input validation and add the todo to array if valid else log 'error'
    const addTodo = (todo) => {
      let newTodos = [...todos]
      newTodos.push(todo)

      setTodos(newTodos)
      setRefresh((value) => !value)
    }

    // Given an index, remove that todo from todos
    const deleteTodo = (index) => {
      let newTodos = [...todos]
      newTodos.splice(index,1)
      
      setTodos(newTodos)
    }

    // Given an index of a todo, toggle the complete status
    const toggleComplete = (index) => {
        let newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
    }

    useEffect(() => {
        const newTodos = [...todos]
        newTodos.sort((a, b) => a.unixTime - b.unixTime);
        // Reverse the todos after sorting for reverse order
        if(!earliestFirst){
          newTodos.reverse()
        }
        setTodos(newTodos)
    }, [refresh])
  

  const context = {
    todos, earliestFirst, toggleOrder, addTodo, setTodos, deleteTodo, toggleComplete,
  }

  return (
    <todoContext.Provider value={context}>
      {children}
    </todoContext.Provider>
  )
}
