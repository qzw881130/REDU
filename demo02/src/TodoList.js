import React from 'react';
import { connect } from 'react-redux';


function TodoList(props){
  const {inputValue, inputChange, list} = props;

  return (
    <div>
        <div>
            <input value={inputValue} onChange={inputChange} />
            <button onClick={props.clickBtn}>Submit</button>
        </div>
        <ul>
            {list.map((item, idx) => <li key={idx}>{item}</li>) }
        </ul>
    </div>
  )
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => ({
        inputChange(e){
            // console.log(e.target.value);
            dispatch({type: 'change_input', value: e.target.value});
        },
        clickBtn(){
            dispatch({type: 'add_item'});
        }
})

export default connect(stateToProps, dispatchToProps)(TodoList);
