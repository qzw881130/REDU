const defaultState = {
    inputValue: 'Write something',
    list: [
        'aaaaaaa',
        'bbbbb'
    ]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input'){
        return {
            ...state,
            inputValue: action.value
        }
    }
    if(action.type === 'add_item'){
        let newState = {...state};
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}