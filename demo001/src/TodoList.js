import React, {useState, useEffect} from 'react';
import {Input, Button, List} from 'antd';

import store from './store';


function TodoList() {
  const [state, setState] = useState(store.getState())

  const changeInput = (e) => {
    const action = {type: 'changeInput', value: e.target.value};
    store.dispatch(action);
  }
  const addItem = () => {
      const action = {type: 'addItem'};
      store.dispatch(action);
  }
  const deleteItem = (idx) => {
      store.dispatch({type: 'deleteItem', index: idx});
  }

  useEffect(() => {
    store.subscribe(() => setState(store.getState()))
  }, []);


  return (
    <div>
        <div>
            <Input style={{width: '250px', margin: '10px'}} 
                placeholder={state.inputValue}
                value={state.inputValue}
                onChange={changeInput}
            />
            <Button type="primary" onClick={addItem}>Add</Button>
        </div>
        <div>
            <List bordered 
            style={{width: '300px', margin: '10px'}}
            dataSource={state.list} 
            renderItem={(item, idx) => <List.Item onClick={() => deleteItem(idx)}>{item}</List.Item>}>

            </List>
        </div>
    </div>
  )
}

export default TodoList