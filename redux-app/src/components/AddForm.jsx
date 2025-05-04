import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; // for sending action to reducer
import {addTodo} from "../features/todo/todoSlice.js"

export default function AddForm() {

    const [task ,setTask] = useState("");

    const dispatch = useDispatch();

    const addTaskHandler = (e)=>{
        e.preventDefault()
        if(!task) return alert("Pleas add your task first!")
        console.log(task);
        dispatch(addTodo(task))
        setTask("")
    }

  return (
    <div>
    
      <form action="submit">
        <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} autoFocus required />
        <button onClick={addTaskHandler} type='submit'>Add Task</button>
      </form>

    </div>
  )
}
