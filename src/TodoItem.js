import React from 'react';
 const TodoItem =(props)=>{
    const {id,text,completed}=props.listI;
    return(
            <div>
            <input className='task-checkbox' onClick={()=>props.onCheck(props.listI)} type='CheckBox' id={id} name={text} value="task" checked={completed} />
            <label>{text}</label>
            </div>
    );
}
export default TodoItem; 