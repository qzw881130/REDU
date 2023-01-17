import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter', //namespace
    initialState: {//initital state
        count: 0,
        list: []
    },
    reducers: { //1, define update function 2, dispatch use action's name
        //内置了immutable.js插件
        add(state, action) {
            console.log(state, action);
            state.count++;
        },
        sub(state){
            state.count--;
        },
        push(state){
            state.list.push(new Date().toLocaleTimeString());
        },
        del(state, action){
            state.list.splice(action.payload, 1);
        }
    }
});
//export action functions
export const {add, sub, push, del} = counter.actions;

//define async action
export const subAsync = (payload) => {
    return async(dispatch, getState) => {
        setTimeout(() => {
            dispatch(sub())
        }, 1000);

        
    }
}


//export reducer to create store
export default counter.reducer;