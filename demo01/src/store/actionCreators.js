import axios from 'axios';
import { API_GET_LIST } from '../const';
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const getListAction = (data) => ({
    type: GET_LIST,
    data
});

export const getTodoList = () => {
    return (dispatch) => { 
        axios.get(API_GET_LIST).then((res) => {
            console.log(res.data);
            const action = getListAction(res.data);
            dispatch(action);
            // const data = res.data;
            // const action = getListAction(data);
            // store.dispatch(action);
        })
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})