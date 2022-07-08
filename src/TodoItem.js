import React from 'react';
export default class TodoItem extends React.Component{
    constructor(){
        super();
        this.state={
           id: 1,
            text: "My Task",
           completed: true
        };
    }
     // eslint-disable-next-line
render(){
    const {id,text,completed}=this.state;
    return(
        <div className='todo-list'>
            <h1 style={{fontSize:50}}>My Daily Goals</h1>
            <div>
            <input type='CheckBox' id={id} name={text} value="task" checked={completed}/>
            <label style={{fontSize:20}}>{text}</label>
            </div>

        </div>
    )
}   
}