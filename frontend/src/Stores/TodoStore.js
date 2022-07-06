import { observable, action, computed, makeAutoObservable } from "mobx";

// A todo follows the format: {name:'todo', due:'unix date-time number', isCompleted: 'boolean'}
export default class TodoStore{

    constructor(){
        makeAutoObservable(this, {
            todos: observable,
            earliestFirst: observable,
            addTodo: action,
            orderTodos: computed,

        })
        this.todos = [];
    }

    // Put it in the todos array
    addTodo = (todo) => {

    }

    // Order the todos according to the earliestFirst
    orderTodos = () => {
        
    }
}