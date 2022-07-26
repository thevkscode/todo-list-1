import React from 'react';
import TodoItem from './TodoItem';
export default class Todo extends React.Component{
constructor(){
    super();
    this.state={
        lists:[
            {
                id:1,
                text:"My List 1",
                completed:true
            },
            {
                id:2,
                text:"My List 2",
                completed:true
            },
            {
                id:3,
                text:"My List 3",
                completed:true
            },
            {
                id:4,
                text:"My List 4",
                completed:true
            },
            {
                id:5,
                text:"My List 5",
                completed:true
            }
        ]
    }
}
    check=(listI)=>{
        const {lists}=this.state
        const index=lists.indexOf(listI)
        lists[index].completed=!(listI.completed)
        this.setState({
            lists
        });
        // this.setState((prevState)=>{
        //     return{
        //         completed:!(prevState.completed)
        //     }
        // });
    }
render(){
    const {lists}=this.state
    return(
        <div>
            <h1 style={{fontSize:50}}>My Daily Goals</h1>
           { lists.map((listI)=>{
            return(
                <div>
            <TodoItem
            listI={listI}
            onCheck={this.check}
            />
                </div>
            )
            })}
        </div>
    );
}
} 