import { makeAutoObservable, observable, action } from 'mobx';

export default class UIStore{
    constructor() {
        makeAutoObservable(this, {
            showTodos: observable,
            showClock: observable,
            toggleTodos: action
        });
        this.showTodos = false;
        this.showClock = false;
    }

    toggle = (type) => {
        if(type == 'todo'){
            console.log('ping')
            this.showTodos = !this.showTodos;
        }
        else if(type == 'arbitrary'){

        }
    }
}