import React from 'react'

export const Todo = (props) => {
    return (
        <div>
            <h4>{props.todotask.title}</h4>
            <p>{props.todotask.task}</p>
            <button className="btn btn-sm mb-4 btn-danger" onClick = {()=>{props.onDelete(props.todotask)}}>Delete</button>
            <hr/>
        </div>
    )
}
