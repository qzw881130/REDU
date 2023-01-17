import React, { Component, useEffect } from 'react';
import store from './store';
import {addItemAction, changeInputAction, deleteItemAction, getListAction, getTodoList, getMyListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';
import { API_GET_LIST } from './const';


class TodoList extends Component {

     changeInputValue = (e) => {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    clickBtn = () => {
        const action = addItemAction();
        store.dispatch(action);
    }

    deleteItem = (index) => {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);

    }

    componentDidMount(){
        // const action = getTodoList();
        // store.dispatch(action);

        const action = getMyListAction();
        store.dispatch(action);
    }


  render() {
      return (
        <TodoListUI 
            inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            list={this.state.list}
            deleteItem={this.deleteItem}
        ></TodoListUI>
    )
  }

}

export default TodoList