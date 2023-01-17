import React from 'react';
import {Input, Button, List} from 'antd/dist/antd';

export default (props) => {
  return (
    <div>
        <div style={{margin: '10px'}}>
            <Input placeholder={props.inputValue} 
            style={{width: '250px', marginRight: '10px'}} 
            onChange={props.changeInputValue}
            value={props.inputValue}
            />
            <Button type="primary"
            onClick={props.clickBtn}
            >Add</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
            <List bordered 
                dataSource={props.list} 
                renderItem={(item, index) => 
                <List.Item 
                    onClick={() => {props.deleteItem(index)}}>
                    {item}
                </List.Item>}>
            </List>
        </div>
    </div>
  )
}