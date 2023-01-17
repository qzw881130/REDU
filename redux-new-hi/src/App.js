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
