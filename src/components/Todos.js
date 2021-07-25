import React from 'react'
import {Todo} from './Todo.js'
export const Todos = (props) => {
    return (
        <div className = "container">
            <h3 className="my-4">Todo-List</h3>
            {props.tasks.length ===0 ? "No tasks!!!!!!" :
            props.tasks.map((task)=>{
                return <Todo todotask = {task} onDelete = {props.onDelete}/>
            })
            
        } 
        
        </div>
    )
}
