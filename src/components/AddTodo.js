// import React from 'react'
import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or desc left blank!!!!!");
        }
        else{props.addTask(title,desc);}
        setdesc("");
        settitle("");
    }

    return (
        <div className="container">
            <h3 className="mb- 4 my-4">Add a Task!!!!</h3>
            <form  onSubmit={submit} >
  <div className="mb-3">
    <label for="title" className="form-label">Title</label>
    <input type="text" value = {title} onChange={(e)=>{
        settitle(e.target.value)
    }} className="form-control" id="title" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Description</label>
    <input type="text" value = {desc} onChange={(e)=>{
        setdesc(e.target.value)
    }} className="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-success btn-sm">Add</button>
</form>

    <hr/>
        </div>
    )
}
