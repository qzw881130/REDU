# redux-demo

####
```bash
npx create-react-redux my-app
```

```bash
npm install @reduxjs/toolkit
npm install react-redux
```

```bash
➜  redux-new-hi git:(main) ✗ tree src
src
├── App.js
├── index.js
└── store
    ├── index.js
    └── modules
        └── counter.js
```

#### src/store/index.js
```js
import { configureStore }  from '@reduxjs/toolkit';
import counter from './modules/counter';

export default configureStore({
    reducer: {
        counter
    }
});
```

#### src/store/modules/counter.js
```js
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
```

#### src/App.js
```js
import { useDispatch, useSelector } from 'react-redux';
import { add, subAsync, push, del } from './store/modules/counter';

function App() {
  const dispatch = useDispatch();
  const {count, list} = useSelector(state => state.counter);

  return (
    <div className="App">
      <ul>
        <li>{count}</li>
        <li onClick={() => {dispatch(add())}}>
          <button>Add</button>
        </li>
        <li onClick={() => {dispatch(subAsync())}}>
          <button>Dec</button>
        </li>
      </ul>
      <hr/>
      
      <ul>
        {list.map((item, idx)=>{
        return (
          <li key={idx}>
            <strong>{idx+1}</strong>:{item}
            <button onClick={()=>{dispatch(del(idx))}}>Delete</button>
          </li>
        )
      })}
      </ul>
      <button onClick={()=>{dispatch(push())}}>
        Push
      </button>
    </div>
  );
}

export default App;
```