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

    toggleTodos = () => {
        this.showTodos= !this.showTodos;
        console.log(this.showTodos)
    }

}

