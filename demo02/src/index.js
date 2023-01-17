import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';

const App = ()=>(
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);