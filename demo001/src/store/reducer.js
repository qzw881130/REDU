let defaultState = {
    inputValue : 'Write Something',
    list : [
        'aaaaaa',
        'bbbbbb',
        'cccccc'
    ]
};
let s = localStorage.getItem('state');
if(!!s){
    defaultState = JSON.parse(s);
    
}

const saveLocal = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
}

export default (state = defaultState, action) => {
    console.log(action);
    if(action.type === '@@INIT'){
        
        
        // if(!s){
        //     console.log('s', s)
        //     return JSON.parse(s);
        // }
        // return defaultState;
    }

    if(action.type === 'changeInput'){
        const newState = {...state};
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'addItem'){
        const newState = {...state};
        console.log(newState);
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        saveLocal(newState);
        return newState;
    }
    if(action.type === 'deleteItem'){
        const newState = {...state};
        newState.list.splice(action.index, 1);
        saveLocal(newState);
        return newState;
    }

    return state;
}