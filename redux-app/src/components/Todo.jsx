import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddForm from './AddForm'
import { deleteTodo, markAsDone } from '../features/todo/todoSlice'


export default function Todo() {

    let todos = useSelector((state)=>state.todos) //accesing stors..

    const dispatch = useDispatch();

    console.log(todos)
    
    const deleteTodoHandler = (id)=>{
      dispatch(deleteTodo(id))
      console.log(id);
    }

    const markDoneHandler = (id)=>{  
      dispatch(markAsDone(id))
      console.log(id)
    }

  return (
    <>
      <h2>Todo List</h2>
      <AddForm />
      <ul>
        {todos.map((todo)=>{
            return (
                <li key={todo.id}>
                   {todo.task} 
                    <button onClick={()=> markDoneHandler(todo.id)} style={{background: "green",border:"none"}}>Done</button> 
                    <button onClick={ ()=> deleteTodoHandler(todo.id)} style={{background: "red",border:"none"}}>Delete</button>
                </li>
            )
        })}
      </ul>
    </>
  )
}
