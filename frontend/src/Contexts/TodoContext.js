import { createContext, useEffect, useState } from 'react';

export const todoContext = createContext({});

export function TodoContextProvider({ children }){

    // Format of todos: {name: string, due: unix date-time number, isCompleted: boolean}
    const [todos,setTodos] = useState([{name:'dick', due: '21/07', isCompleted: false}, {name:'dishes', due: '21/07', isCompleted: false}])
    const [earliestFirst, setEarliestFirst] = useState(false)
    const [refresh, setRefresh] = useState(false)

    // Input validation and add the todo to array if valid else log 'error'
    const addTodo = (todo) => {
      console.log('attempting to add todo: ', todo)
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

    }

    useEffect(() => {
        const unorderedTodos = [...todos]
        // Order by date
        //console.log(todos)
        if(!earliestFirst){
            // Reverse the todos
        }

        // setTodos(orderedTodos)
    }, [refresh])
  

  const context = {
    todos, earliestFirst, addTodo, setTodos, deleteTodo, toggleComplete,
  }

  return (
    <todoContext.Provider value={context}>
      {children}
    </todoContext.Provider>
  )
}
