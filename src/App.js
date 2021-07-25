import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import {Todos} from './components/Todos';
import {AddTodo} from './components/AddTodo';

function App() {

  let initialTasks;
  if(localStorage.getItem("tasks") === null){
    initialTasks = [];
  }
  else{
    initialTasks = JSON.parse(localStorage.getItem("tasks"));
  }


  const onDelete = (todo)=>{
    console.log("deleted",todo);

    setTasks(tasks.filter((e)=>{
      return e!==todo;
    }))

    // localStorage.setItem("tasks",JSON.stringify(tasks));
  }
  
  const addTodo = (title,task)=>{

    console.log('added', title,task);
    let sno;
    if(tasks.length === 0){
      sno = 1;
    }
    else{
      sno = tasks.length+1;
    }
    const newTask = {
      sno:sno,
      title : title,
      task:task
    };

    console.log(newTask);
    setTasks([...tasks,newTask]);
    

  }

  const [tasks, setTasks] = useState(initialTasks);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
  }, [tasks])
  
  
  return (
    
    <>
     <Header title = "My-Todo-App-List"/>
     <AddTodo addTask = {addTodo}/>
     <Todos tasks = {tasks} onDelete = {onDelete}/>
     {/* <Footer/> */}
    </>


  );
}

export default App;
